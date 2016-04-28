var  http = require("http");
var fs = require("fs");
var mime = require("mime");
/*
* request:请求
* response:响应
* slice(start,end);
* mime.lookup(url);//获取图片类型
* */
function serve(request,response){
   var url = request.url;
    console.log(url);//   /index.js

   if(url == "/"){
        response.setHeader("Content-Type","text/html;charset=utf8");//设置编码
       fs.readFile("index.html",function(err,data){
           response.write(data);
           response.end();
       });

   }else{
       static(url,response);
   }

   function static(url,response){
       //console.log(mime.lookup(url))
       response.setHeader("Content-Type",mime.lookup(url)+";charset=utf8");
       fs.readFile(url.slice(1),function(err,data){//异步
           response.write(data);
           response.end();
       });
   }
}
//每当有请求来的时候调用serve函数，对客户端进行响应
var server = http.createServer(serve);
server.listen(8080,"localhost");
