
var dgram = require("dgram");
var socket = dgram.createSocket("udp4");

socket.on("message",function(msg,rinfo){
    console.log(msg);
    console.log(rinfo);
    socket.send(msg,0,msg.length,rinfo.port,rinfo.address);
});
socket.bind(41234,"localhost");

socket.send(new Buffer("中国广东"),0,6,41234,"localhost",function(err,bytes){
    console.log("发送了个字节数",bytes);
});