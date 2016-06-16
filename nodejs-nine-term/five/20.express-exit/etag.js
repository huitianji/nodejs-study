/*
*修改时间缓存etag
* */

var fs = require("fs");
var express = require("express");

var http = require("http");
var crypto = require("crypto");
function getHash(str){
    var shasum = crypto.createHash('sha1');
    return shasum.update(str).digest('base64');
}
/*
*1.
* */
function send(filename,req,res){
    //取得最后修改时间
    var ifNoneMath =new Date(req.headers['if-none-match']);
    var data = fs.readFileSync(filename).toString();
    if(ifNoneMath == getHash(data)){
        res.statusCode = 304;
        res.end();
    }else{
        res.writeHead(200,{'Etag':getHash(data)});
        fs.createReadStream(filename).pipe(res);
    }
}
http.createServer(function(req,res){
    if(req.url != '/favicon.ico'){
        var filename = req.url.slice(1);//     /index.html

        send(filename,req,res);
        console.log(req.url)
    }else{
        res.end("404");
    }
    //res.end(req.url)
}).listen(8080);