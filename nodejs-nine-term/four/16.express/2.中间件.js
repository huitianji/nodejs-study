/*
 *   1.安装
 *       npm install express
 *   2.特点
 *   -1-每个中间件都可以控制流程是否继续执行
 *   -2- req  res  相同对象
 *   4  如果中途出错了，转交错误处理中间件进行处理
 *
 * */
var express = require("express");
var app = express();
//中央
app.use(function(req,res,next){//不传的话。不匹配路径
    console.log("zhngyang");
    req.mny = 100;
    next();
});

//省
app.use(function(req,res,next){//不传的话。不匹配路径
    console.log("省");
    req.mny = req.mny - 10;
    next("钱丢了");
});
//村
app.use(function(req,res,next){//不传的话。不匹配路径
    console.log("村");
    req.mny = req.mny - 80;
    next();
});
app.all("*",function(req,res){//app.all-> * 匹配所有的 路径
    console.log("农民手里");
    res.end(""+req.mny);
});
app.use(function(err,req,res,next){
    console.log("zhngyang== zhongyang");
    console.log(err);
    res.end(err.message);
});
app.listen(8080);