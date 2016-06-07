var express = require("express");
var session  = require("express-session");
var app = express();
app.use(session({
    secret:'jh',//secret的值建议使用随机字符串
    cookie:{maxAge:60*1000*30},//过期时间--毫秒
    resave:true,//
    saveUninitialized:true

}));
app.get("/",function(req,res){
    if(req.session.sign){
        console.log(rq.session);
        req.send(req.session.name);
    }else{
        req.session.sign = true;
        req.session.name = "jth";
        res.send("welcome");
    }
});
app.lissten(8080);