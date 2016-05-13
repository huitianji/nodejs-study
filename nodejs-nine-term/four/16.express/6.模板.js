/*
*npm install ejs
* */
var express = require('express');
var app = express();

//var ejs = require('ejs');
//ejs.open = '{{';
//ejs.close = '}}';
//app.set("view engine",{
//    "open":"{{",
//    "close":"}}"
//});
app.set("view engine","html");//模板引擎

app.set("views",__dirname);//当前目录下

app.engine("html",require("ejs").__express);//设置模板的渲染方式

app.get("/",function(req,res){
    res.render("index",{//读出模板
        name:"jht",
        age:10
    });
});
app.listen(8080);