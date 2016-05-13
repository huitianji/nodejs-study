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
app.set("view engine","ejs");//模板引擎
//

//
app.set("views",__dirname);//当前目录下
app.get("/",function(req,res){
    res.render("index",{//读出模板
        name:"jht",
        age:10
    });
});
app.listen(8080);