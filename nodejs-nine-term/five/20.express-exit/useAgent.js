/*
*User-Agent:Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36
* */
var express = require("express");
var agentParser = require("user-agent-parser");
var app = express();
var visit = {mobile:0,other:0};
app.use(function(req,res,next){
    req.agent = agentParser(req.headers['user-agent'] || '');
    next();
});

app.get('/',function(req,res){
    //console.log(req.agent);
    //console.log(req.agent.device.type);
    if(req.agent.device.type == "mobile"){//移动端
        visit.mobile = visit.mobile + 1;

    }else{
        visit.other = visit.other + 1;
    }
    //res.send(req.agent);
    res.send(visit);
});

app.listen(8081);