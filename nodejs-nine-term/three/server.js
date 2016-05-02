var http = require("fs");
function server(req,res){
    console.log(req.headers);
    res.end("404");
    req.on("data",function(data){

    });
}
http.createServer(server)
    .listen(8080,"localhost");
