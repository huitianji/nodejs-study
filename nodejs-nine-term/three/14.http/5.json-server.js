var http = require("http");
http.createServer(function(req,res){
    req.setEncoding("utf-8");
    var result = "";
    req.on("data",function(data){
        result += data;
    });
    req.on("end",function(data){
        console.log(JSON.parse(result));
        res.end(result);
    });
}).listen(8080,function(){
        console.log("server  start")
    });