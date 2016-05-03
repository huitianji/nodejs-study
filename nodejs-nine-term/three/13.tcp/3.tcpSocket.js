var fs = require("fs");
var net = require("net");
var util = require("util");
//allowHalfOpen:是否断开连接
//socket  双工流 Duplux
var ws = fs.createWriteStream("./socket.txt");//
var server = net.createServer({allowHalfOpen:false},function(socket){
    //客户端
    console.log(util.inspect(socket.address()));
    //socket.setEncoding("utf-8");
    //客户端停止写入时 也不关闭目标文件
    socket.pipe(ws,{end:false});
    socket.on("end",function(){
        ws.end("bybes");
        socket.unpipe(ws);
    });
});
server.on('error',function(err){
    console.log(err);
});
server.listen(8080,"localhost",511,function(){//prot/host/backlog->等待队列中的最大数量
    var fm = util.inspect(server.address(),true,0,true);
    console.log(fm);
    //10秒后关闭服务器
    setTimeout(function(){
        server.close();
    },5000);
});


//////////////
/*
*telnet   192.168.10.11 8080
* */