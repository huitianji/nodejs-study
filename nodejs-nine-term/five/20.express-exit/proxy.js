/*
*反向代理
* */
var express = require("express");
var proxy = require('http-proxy').createProxyServer();

var app = express();

function proxyPass(config){

     return function (req,res,next){
        var target = config[req.hostname];
        proxy.web(req,res,{
            target:target
        });
    }

}
//中间键http://a.jht.com/
app.use(proxyPass({
    "a.jht.com":"http://localhost:3000"
}));

app.listen(80);

//应用服务器A a.jht.com
var app3000 = express();
app3000.get('/',function(req,res){
    //console.log(req.hostname)
    res.end('3000');

});

app3000.listen(3000);
/*
//应用服务器B
var app4000 = express();
app.get('/',function(req,res){
    res.end('4000');
});
app.listen(4000);
*/