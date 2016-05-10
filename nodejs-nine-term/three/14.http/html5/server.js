var mime = require("mime");
var http = require("http");
var fs = require("fs");
var url = require("url");
var formidable = require("formidable");
var querystring = require("querystring");

var app = http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == "/"){
        fs.createReadStream("./index.html").pipe(res);
    }else if(pathname == "/post"){
        var parser = new formidable.IncomingForm();
        parser.parse(req,function(err,fields,files){

        });
    }else{
        res.end("404");
    }
});
app.listen(8080);