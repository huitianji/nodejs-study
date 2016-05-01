/**
 * fs.write()  //写入文件
 *
 */
var fs = require("fs");
fs.open("index.txt","w",function(err,fd){
//(fd, buffer, offset, length, position, callback)
    var buffer = new Buffer("梦想开门");
    fs.write(fd,buffer,6,6,6,function(err,bytesWrite){
       fs.write(fd,buffer,0,6,0,function(err,bytesWrite){
           //console.log(err)
       });

    });
});
fs.open("index.txt","w",function(err,fd){
    console.log(fd)
});