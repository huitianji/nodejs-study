var fs = require("fs");
var net = require("net");
var util = require("util");
//allowHalfOpen:是否断开连接
//socket  双工流 Duplux
var ws = fs.createWriteStream("./socket.txt");//
var server = net.createServer({allowHalfOpen:false},function(socket){
    socket.setTimeout(10*10000);//超时
    socket.on("timeout",function(){
        socket.resume();
        socket.pipe(ws,{end:false});
        ws.write(socket.remoteAddress());
    });
});
server.on('error',function(err){
    console.log(err);
});
server.listen(8080,"localhost",511,function(){//prot/host/backlog->等待队列中的最大数量
    var fm = util.inspect(server.address(),true,0,true);
    console.log(fm);

});


//////////////
/*
*telnet   192.168.10.11 8080
* */