/*
*   1.安装
*       npm install express
*   2.获取和应用
*
* */
var express = require("express");
var app = express();
app.get("/list",function(req,res){
    res.send(req.url);
});
app.post("/list",function(req,res){
    res.send("post = "+req.url);
});
app.all("/all",function(req,res){//app.all->匹配所有的方法
    res.send("post = "+req.url);
});
app.all("*",function(req,res){//app.all-> * 匹配所有的 路径
    res.send("此页面走失了");
});
app.listen(8080);