var http = require("http");
var util = require("util");
var querystring = require("querystring");
http.createServer(function(req,res){
    var contentType = req.headers['content-type'];
    req.setEncoding("utf-8");
    var result = "";
    req.on("data",function(data){
        result += data;
    });
    req.on("end",function(data){

        //console.log(JSON.parse(result));
        if(contentType == "application/json"){
            var obj = JSON.parse(result);
        }else if(contentType == "application/x-www-form"){
            var obj = querystring..parse(result);
        }
        //res.end(result);
        res.end(util.inspect(obj));//转换成字符串
    });
}).listen(8080,function(){
        console.log("server  start")
    });