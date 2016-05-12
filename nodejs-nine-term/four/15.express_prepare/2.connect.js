var http = require("http");
var url = require("url");

var proto = {};//镜像
function createServer(){
    function app(req,res,next){
        app.handle(req,res,next);
    }
    //新版本es6  -- >有assign
    //Object.assign(app,proto);//拷贝  把 proto 内容属性拷贝到  app
    for(var name in proto){
        app[name] = proto[name];
    }
    app.stack = [];
    return app;
}
proto.use = function(route,fn){
    var path = route;
    var handle = fn;

    if(typeof route != "string"){
        handle = route;
        path = "/";
    }
    this.stack.push({handle:handle,path:path});
}
proto.handle = function(req,res,next){
    var stack = this.stack;
    var index = 0;
    function next(){
        var layer = stack[index++];
        var route = layer.path;
        var handle = layer.handle;

        var path = url.parse(req.url).pathname;
        if(path.startsWith(route)){
            handle(req,res,next)
        }else{
            next();
        }
        //stack[index++](req,res,next);
    }
    next();
}
proto.listen = function(port){
    var server = http.createServer(this);//this == app;
    server.listen(port);
}
module.exports =  createServer;