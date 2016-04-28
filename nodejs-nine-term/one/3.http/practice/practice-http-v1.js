var http = require("http");
var fs = require("fs");
var mime = require("mime");
var url = require("url");

function server(request,response){

    var urlObj = url.parse(request.url,true);
    var pathname = urlObj.pathname;
//    var url = request.url;
//    console.log(urlObj);
    if(pathname == "/"){
        response.setHeader("Content-Type","text/html;charset=utf-8");
        fs.readFile("../index.html",function(err,data){
            response.write(data);
            response.end();
        });
    }else{
        static(pathname,response);
    }

    function static(pathname,response){
//        console.log(pathname);
        response.setHeader("Content-Type",mime.lookup(pathname) + ";chart=utf-8");
        fs.readFile("../" + pathname.slice(1),function(err,data){
            response.write(data);
            response.end();
        });
    }


}

var server = http.createServer(server);
server.listen(8080,"localhost");
