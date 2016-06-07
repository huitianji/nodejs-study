/*
*会话
* */

var uuid =require("uuid");
var http = require("http");
var fs = require("fs");
var querystring = require("querystring");

http.createServer(sever).listen(8080);
var SESSION_ID = "connect.id";
var sessions = {};
function serve(req,res){
    var cookie = req.headers['cookie'];
    var cookieObj = queryString.parse(cookie);
    if(cookieObj[SESSION_ID]){

    }else{
        var sessionId = uuid.v4();
        sessions[sessionId] = {money:100};
        res.setHeader("Content-Type","text/html;charset=utf8")
        res.setHeader('Set-Cookie',SESSION_ID+"="+sessionId);
        res.end("欢迎您。新顾客");
    }
}
