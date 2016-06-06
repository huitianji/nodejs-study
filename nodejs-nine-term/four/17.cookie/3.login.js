var express = require("express");
var cookieParser = require("cookie-parser");
var querystring = require("querystring") ;
var app = express();
//设置模板引擎
app.set('view engine','html');
app.set('view',__dirname);
app.engine('html',require("ejs").__express);//设置html的解析器

app.use(cookieParser());

function checkLogin(req,res,next){
    if(req.cookies && req.cookies.username){
        next();
    }else{
        res.redirect("/");
    }
}

app.get("/",function(req,res){
    res.render("index");
});
app.get("/login",function(req,res){
    //302重定向
    res.cookie("username",req.query.username);
    res.redirect("/user");//重定向
});
app.get("/user",[checkLogin],function(req,res){
    res.render("user",{"username":req.cookies.username});
});
app.listen(8080);













