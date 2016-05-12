var http = require("http");
var url = require("url");
var querystring = require("querystring");

var articles = {
    "1" : "第一篇文章-----",
    "2" : "第二篇文章-----",
    "3" : "第三篇文章-----"
}
http.createServer(function(req,res){
    //所有的程序都使用
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    var query = urlObj.query;
    console.log(urlObj);
    if(pathname == "/"){
        res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
        res.end('<ul>' +
            '<li><a href="/article?id=1">第一篇</a></li>' +
            '<li><a href="/article?id=2">第二篇</a></li>' +
            '<li><a href="/article?id=3">第三篇</a></li>' +
            '</ul>');
    }else if(pathname == "/article"){
        res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
        res.end(articles[query.id]);
    }

}).listen(8080);