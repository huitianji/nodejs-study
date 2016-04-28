var  http = require("http");
/*
* request:请求
* response:响应
* */
function serve(request,response){
    console.log(request.method);//请求的方法
    console.log(request.url);//请求的路径
    console.log(request.headers);//请求的头

    response.statusCode = 404;//设置状态码
    response.setHeader("Content-Type","text/html;charset=utf8");
    response.setHeader("name","jht");//设置请求的头
    response.write(new Date().toString());//设置响应体
    response.end();
}
//每当有请求来的时候调用serve函数，对客户端进行响应
var server = http.createServer(serve);
server.listen(8080,"localhost");
