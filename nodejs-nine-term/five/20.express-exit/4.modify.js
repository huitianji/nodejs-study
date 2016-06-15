/*
*修改时间缓存
* */

var fs = require("fs");
var express = require("express");

var http = require("http");
/*
*1.
* */
function send(filename,req,res){
    //取得最后修改时间
    var lastModified =new Date(req.headers['if-modified-since']);
    fs.stat(filename,function(err,stat){//获取一个文件的描述信息
        //console.log(stat);

        if(stat.mtime.getTime() == lastModified.getTime()){//缓存里面的文件是最新的。
            res.statusCode = 304;
            res.end();
        }else{
            res.writeHead(200,{'Last-Modified':stat.mtime.toGMTString()});
            fs.createReadStream(filename).pipe(res);
        }

    });
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