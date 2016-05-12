var url = require("url");
var fs  = require("fs");
var articles = {
    "1" : "第一篇文章-----",
    "2" : "第二篇文章-----",
    "3" : "第三篇文章-----"
}
module.exports = function(app){
    app.use("/list",function(req,res){
        fs.createReadStream("./1.html").pipe(res);
//        res.send('<ul>' +
//            '<li><a href="/article?id=1">第一篇</a></li>' +
//            '<li><a href="/article?id=2">第二篇</a></li>' +
//            '<li><a href="/article?id=3">第三篇</a></li>' +
//            '</ul>');
    });
    app.use("/article",function(req,res){
        res.send(articles[req.query.id]);
//        res.readFile("./detail.html","utf-8",function(err,data){
//            var data = data.replace("<%content%>",articles[req.query.id]);
//            return data;
//        });
        //res.rander("detail.html",{content:articles[req.query.id]});
    });
    app.use(function(req,res){
        res.end("404");
    });
}