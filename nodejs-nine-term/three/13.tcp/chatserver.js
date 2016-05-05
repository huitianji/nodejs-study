/**
 *1.创建一个服务器
 * 2.客户端可以连接服务器
 * 3.客户端可以发言，然后可以广播给大家
 * 4.客户端连接和退出后都要通知大家
 * 5.显示当前的在线人数
 */
var net = require("net");
var util = require("util");
var clients = {};
var server = net.createServer(function(socket){//每次客户端进来的时候执行一次
    var nickname;//每个人一个昵称
    socket.setEncoding("utf-8");
    server.getConnections(function(err,count){
        socket.write("当前在线人数"+count);
    });
    socket.write("欢迎光临\r\n");//每次连接上。就打个招呼
    socket.on('data',function(data){
        //console.log(new Buffer(data));
        var data = data.replace(/\r\n/,"");//说的话不换行。不回车
        if(nickname){//广播
            broadcase(nicknamem,nickname + ":" + data+"\r\n")
        }else{
            nickname = data;
            clients[nickname] = socket;
            //通知大家
            broadcase(nickname,nickname + "加入了聊天室" +"\r\n");
            //
        }
    });
    socket.on("end",function(){
        broadcase(nickname,nickname + "离开了聊天室" +"\r\n");
        clients[nickname].destroy();
        delete clients[nickname];
    });
    socket.on("close",function(){

    });
    socket.on("err",function(){

    });
});
function broadcase(nicknamem,msg){
    for(var name in clients){
        if(nickname != name){//阻止自己发话自己看
            clients[name].write(msg);//说data
        }
    }
}
server.listen(8080);
