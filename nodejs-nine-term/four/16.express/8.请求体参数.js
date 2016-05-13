/*
*npm install ejs
* */
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

//app.use(express.static(__dirname));//当前的目录
var path = require("path");
var fs = require("fs");
//方法1
//app.use(express.static(path.join(__dirname,"public")));//当前的目录
app.use(function(req,res,next){
    console.log(req.headers["content-type"]);//content-type  小写
    next();
    //multipart/form-data
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));//form表单 --- 请求体转换成json对象
app.post("/post",function(req,res){
    res.send(req.body);
});
//方法2
app.use(function(req,res,next){
    var rs = fs.createReadStream(path.join(__dirname,"public",req.path));
    rs.on("error",function(){
        next();
    });
    rs.pipe(res);
    console.log(req.path);//    /index.html
});
//end
console.log(__dirname);//D:\jihuitian\nodejs-study\nodejs-nine-term\four\16.express
console.log(path.join(__dirname,"public"));//D:\jihuitian\nodejs-study\nodejs-nine-term\four\16.express\public
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

//console.log('***      module.filename = ' + module.filename + ' ***');
//console.log('***           __filename = ' + __filename + ' ***');
//console.log('***            __dirname = ' + __dirname + ' ***');
//console.log('***        process.cwd() = ' + process.cwd() + ' ***');
//console.log('*** require.main.filename= ' + require.main.filename + ' ***');