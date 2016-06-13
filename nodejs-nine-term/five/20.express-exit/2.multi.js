/*
*  多语言网站
* */
var express = require("express");
var path = require("path");

var app = express();
//Accept-Language:zh-CN,zh;q=0.8
function checklanguage(langulages){
    function parse(str){
        if(!str){
            return [];
        }
        return str.toLowerCase().split(",").map(function(language){
            var parts = language.split(";");
            return {name:parts[0],q:parts[1] || 1};
        }).filter(function(language){//过滤掉服务器点不能提供的语言
            return langulages.indexOf(language.name) != -1;
        }).sort(function(pre,after){//按Q进行排序，从高到低排序
            return after.q - pre.q;
        }).map(function(item){//把数组的每个元素转成字符串
            return item.name;
        });

    }
    return function(req,res,next){
        var acceptLanguages = req.headers['accept-language'] ;
        req.acceptsLanguage =    parse(acceptLanguages)[0] || langulages[0];
        next();
    }
}

app.use(checklanguage(['en','zh']));
app.get("/",function(req,res){//访问根目录
    res.setHeader('Content-Language',req.acceptsLanguage);
    res.sendFile(path.join(__dirname,req.acceptLanguage,"index.html"));
});

app.listen(8080);