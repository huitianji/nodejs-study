/*
* 接收客户端的参数数据
* 1.query 查询字符串
* 2.路径参数  params
* 3.请求体里 req.body
* 4.req.headers
* */
var express = require("express");
var app = express();

app.get("/query",function(req,res){
    res.send(req.query);
    //query?name=jht&age=10   =>{"name":"jht","age":"10"}
});
app.get("/article/:id/:name",function(req,res){
    res.send(req.params);
    //http://localhost:8080/article/1/jht  =>  {"id":"1","name":"jht"}
   // '{"id":"xx","name":"name" }'
});
app.all("/host",function(req,res){
    console.log(req.path);
    console.log(req.host);
    res.send("host");
    //http://localhost:8080/host  -->  /host
    //                            -->  localhost
});
app.listen(8080);