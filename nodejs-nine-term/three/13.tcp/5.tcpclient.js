var net = require("net");
var util = require("util");

var socket = new net.Socket({allowHalfOpen:false});
socket.setEncoding("utf-8");

socket.connect(8080,"localhost",function(){
    socket.write("hello");
    socket.on("data",function(data){
        console.log(data);
    })
});