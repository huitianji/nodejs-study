var http = require("http");
http.createServer(function(req,res){
   //设置
    res.setHeader("Content-Type","text/html");
    console.log(res.getHeader("Content-Type"));
    res.removeHeader("Content-Type");
    console.log(res.getHeader("Content-Type"));
    console.log(res.headersSent);//响应头发送
    res.setData = false;//不发送日期
    res.statusCode = 400;
    res.write("heloo");
    console.log(res.headersSent);
}).listen(8080,function(){
        console.log("server  start")
    });