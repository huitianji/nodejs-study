var http = require("http");
http.createServer(function (req,res) {
    var time = new Date(new Date().getTime() + 60 * 1000).toGMTString();
    res.writeHead(200, {
        "Set-Cookie": 'name=jh;path=/;Expires = ' + time
    })
    res.end("hello");
}).listen(8080);
