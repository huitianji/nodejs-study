var fs = require("fs");
var rs = fs.createReadStream("./read.txt");
var ws = fs.createWriteStream("./write.txt");
/*
* 全部写进去之后触发一个drain事件
* */
rs.on("data",function(data){
    var flag = ws.write(data);
    console.log(flag);
});
ws.on("drain",function(){
    console.log("drain");
});