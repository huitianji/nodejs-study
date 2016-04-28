var  http = require("http");
var fs = require("fs");
var mime = require("mime");
var url = require("url");//对url进行处理，把字符串转换成对象
/*
* request:请求
* response:响应
* slice(start,end);
* mime.lookup(url);//获取图片类型
* */
function serve(request,response){
    //true 表示 query 转成对象
    var urlObj = url.parse(request.url,true);// query: { name: 'j', agg: 'a', mp: 'm' },
    //console.log(urlObj);


//   var url = request.url;
//    console.log(url);//   /index.js

    var pathname = urlObj.pathname;

   if(pathname == "/"){
        response.setHeader("Content-Type","text/html;charset=utf8");//设置编码
       fs.readFile("index.html",function(err,data){
           response.write(data);
           response.end();
       });

   }else if(pathname == "/clock"){ //curl http://localhost:8080/clock       ===== git bash
       var count = 0;
       var timer = setInterval(function(){
           count++;
           response.setHeader("Content-Type","text/html;charset=utf8");
           response.write(new Date().toString());

           if(count == 5){
               clearInterval(timer);
               response.end();
           }
       },1000);
   }

   else{
       static(pathname,response);
   }

   function static(pathname,response){
       console.log(pathname);
       //console.log(mime.lookup(pathname))
       response.setHeader("Content-Type",mime.lookup(pathname)+";charset=utf8");
       fs.readFile(pathname.slice(1),function(err,data){//异步
           response.write(data);
           response.end();
       });
   }
}
//每当有请求来的时候调用serve函数，对客户端进行响应
var server = http.createServer(serve);
server.listen(8080,"localhost");
