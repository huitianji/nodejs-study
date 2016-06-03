var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();
app.use(cookieParser());

app.get("/",function(req,res){
    //如果请求中的cookie 存在 visited,则输出cookie
    //否则设置cookie  字段 visited,并设置过期时间10分钟
    if(req.cookie.visited){
        res.send("欢迎老朋友");
    }else{
        res.cookie('visited',1,{maxAge:10*60*1000});
        res.send("欢迎新朋友");
    }
});
app.listen(8080);