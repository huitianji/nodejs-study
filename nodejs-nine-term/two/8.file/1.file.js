var fs = require("fs");
/*
* 同步方式读取
* */
var data = fs.readFileSync("index.txt","utf-8");
console.log(data);
//异步读取
fs.readFile("index.txt","utf-8",function(err,data){
    console.log(data);
});