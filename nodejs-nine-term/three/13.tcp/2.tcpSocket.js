var net = require("net");
var util = require("util");
//allowHalfOpen:是否断开连接
//socket  双工流 Duplux
var server = net.createServer({allowHalfOpen:false},function(socket){
    //客户端
    console.log(util.inspect(socket.address()));
    socket.setEncoding("utf-8");
    socket.on("data",function(data){//监听客户端发来的数据
        console.log(data);
        console.log("接收到多少个字节",socket.bytesRead);
    });
    socket.on("close",function(err){
        console.log("close=",err);
    });
    socket.on("end",function(err){//正常关闭
        console.log("end",err);
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