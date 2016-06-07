var connect = require("./connect");//中间件

var app = connect();

app.use(function(req,res){
    res.send = function(html){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(html);
    };
});
app.get(function(req,res,next){
    res.send('hello');
});
app.listen(8080);

