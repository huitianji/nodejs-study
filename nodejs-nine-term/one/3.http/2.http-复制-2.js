var  http = require("http");
var fs = require("fs");
/*
* request:请求
* response:响应
* */
function serve(request,response){
   var url = request.url;
    console.log(url);


   if(url == "/"){
        response.setHeader("Content-Type","text/html;charset=utf8");//设置编码
       fs.readFile("index.html",function(err,data){
           response.write(data);
           response.end();
       });

   }else if( url == "/style.css"){
        response.setHeader("Content-Type","text/css;charset=utf8");
        fs.readFile("style.css",function(err,data){//异步
            response.write(data);
            response.end();
        });

   }else if( url == "/index.js"){
       response.setHeader("Content-Type","application/x-javascript;charset=utf8");
       fs.readFile("index.js",function(err,data){//异步
           response.write(data);
           response.end();
       });

   }

}
//每当有请求来的时候调用serve函数，对客户端进行响应
var server = http.createServer(serve);
server.listen(8080,"localhost");
