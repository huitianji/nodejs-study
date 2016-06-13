/**
 *图片防盗链
 * Referer:http:.......
 */
var express = require("express");
var path = require("path");
var app = express();
//判断用户是否有权限访问此图片
app.use('/img',function(req,res,next){
    //设置白名单，允许 哪些主机过来请求
    var whitelist = ['a.jth.com'];
    //end
    var referer = req.headers.referer;
    //console.log(req.headers);
    //http://localhost:8080/    referer
    if(!referer){
        return next();
    }
    //a.jth.com:8080
    var referHost = require("url").parse(referer).host.split(":")[0];
    //console.log(req.host);
    //console.log(require("url").parse(referer).host);
    if(referHost === req.host){
        return next();
    }
    res.sendFile(path.join(__dirname,'img','wrong.gif'));//【F】大写绝对路径。小写，相对路径。
});
app.use(express.static(__dirname));//静态文件
//渲染返回html
app.get("/",function(req,res){
    //console.log(req.headers);
    //path.join(__dirname)当前目录
    res.sendFile(path.join(__dirname,'img.html'));//【F】大写绝对路径。小写，相对路径。
});
app.listen(8081);
