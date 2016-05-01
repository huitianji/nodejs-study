var fs = require("fs");
/*
*同步读取
* O_RDONLY == r   只读
* O_SYNC           同步
* O_RDWR           可读可写
* O_TRUNC     truncate   清空文件
* O_CREAT         如果原来没有就创建
* O_WRONLY       只写
* O _EXCL     excludsive   排它操作
* O_APPEND      追加
*
*
* */
/*
* path,
* options
*   encoding  文件编码
*   flag
* */
//var data = fs.readFileSync("index.txt","utf-8");
//var data = fs.readFileSync("index.txt",{encoding:"utf-8",flag:"r"});
fs.readFile("index1.txt",{encoding:"utf-8",flag:"r"},function(err,data){
    if(err){
        console.log(err);
    }
})
//console.log(data);