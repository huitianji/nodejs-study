var http = require("http");

module.exports = createApplication;
function createApplication(){
    var app = function(req,res){
        var index = 0;
        function next(){
            var fn = app.stack[index++];
            fn(null,req,res,next);
        }
        next();
    };
    app.stack = [];
    app.use = function(fn){
        app.stack.push(fn);
    };
    app.listen = function(){
        var server = http.createServer(this);
        server.listen();
        listen.call(server,arguments);
    }
    return app;
}