var http = require("http");
//function serve(req,res){
//    //console.log(req.headers);
//    res.end("404");
////    req.on("data",function(data){
////        console.log(data);
////    });
//}
//http.createServer(serve)
//    .listen(8080);
function server(req,res){
    console.log(req.headers);
   // res.end("404");
    req.setEncoding("utf-8");
    req.on("data",function(data){
        console.log(data);
    });
}
http.createServer(server).listen(8080);