/**
 *
 */
var eventEmitter = require("events").EventEmitter;//node老版本加。。
var util = require("util");//继承用的，
function Bell(name){
    this.name = name;
}
//继承 eventEmitter
util.inherits(Bell,eventEmitter);

var jingleBell = new Bell("jingle");

jingleBell.on('ring',function(){
    console.log("大大的红包1");
});
jingleBell.addListener('ring',function(){
    console.log("大大的红包2");
});

//jingleBell.removeAllListeners("ring");//全部清除掉

function drop(who){
    console.log(who + "drop");
}
jingleBell.once('drop',drop);//一次

jingleBell.emit("ring");

//jingleBell.removeListener("drop",drop);//清除一次

jingleBell.emit("drop","大象");
jingleBell.emit("drop","后缀");

console.log(jingleBell.listeners("ring"));//查看监听。。