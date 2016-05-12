var http = require("http");
var proto = {};//镜像
function createServer(){
    function app(req,res,next){
        app.handle(req,res,next);
    }
    Object.assign(app,proto);//拷贝  把 proto 内容属性拷贝到  app
    app.stack = [];
    return app;
}
proto.use = function(handle){
    this.stack.push(handle);
}
proto.handle = function(req,res,next){
    var stack = this.stack;
    var index = 0;
    function next(){
        stack[index++](req,res,next);
    }
    next();
}
module.exports =  createServer;