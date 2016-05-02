var fs = require("fs");
var rs = fs.createReadStream("./read.txt",{
    start:0,
    end:5,
    //encoding:"utf-8",
    highWaterMark:3
});
rs.setEncoding("utf-8");
rs.on("open",function(){
    console.log("打开文件");
});
rs.on("data",function(data){

    //setInterval(function(){
        console.log(data);
        rs.pause();//暂停
        setTimeout(function(){
            rs.resume();//恢复
        },3000);
    //},5000);

});
rs.on("end",function(){
    console.log("读取完成！");
});
rs.on("close",function(){
    console.log("文件关闭");
});