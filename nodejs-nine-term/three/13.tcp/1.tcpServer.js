var net = require("net");
var util = require("util");
//allowHalfOpen:是否断开连接
//socket  双工流 Duplux
var server = net.createServer({allowHalfOpen:false},function(socket){
    //客户端
    console.log(util.inspect(socket.address()));
    //查看当前连接数量
    server.getConnections(function(err,count){
        console.log(count);
    });
    socket.getConnections(function(err,count){
        console.log(count);
        socket.destroy();//销毁掉
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
server.on("close",function(){
    console.log("服务器端正常关闭");
});

//////////////
/*
*telnet   192.168.10.11 8080
* */