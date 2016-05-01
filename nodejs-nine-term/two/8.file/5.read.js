/*
* 两个两个读取
* */
var fs = require("fs");
var buffer = new Buffer(12);
fs.open("index.txt","r",function(err,fd){
   fs.read(fd,buffer,0,6,0,function(err,bytesRead){
        console.log("bytesRead = ",bytesRead);
        console.log(buffer.toString());
       fs.read(fd,buffer,6,6,6,function(err,bytesRead){
            console.log("bytesRead = ",bytesRead);
           console.log(buffer.toString())
       });
   })
});