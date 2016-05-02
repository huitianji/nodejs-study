var fs = require("fs");
var rs = fs.createReadStream("./read.txt");
var ws = fs.createWriteStream("./write.txt");
ws.on("open",function(){
    console.log("写入文件已经打开");
});
rs.on("data",function(data){
    ws.write(data)
});
rs.on("end",function(){
    ws.end("写入完成",function(){
        console.log("写入完毕");
        console.log("共写入多少个字节=",ws.bytesWritten);
    });
})