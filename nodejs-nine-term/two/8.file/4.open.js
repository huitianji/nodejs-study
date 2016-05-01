var fs = require("fs");
fs.readFileSync("index.txt");

/*
*process.stdout.write();  标准输出
* process.stdin;        标准输入
* process.stderr       错误输出
*
* */

var fd = fs.openSync("index.txt","r");
/*
*fd ->文件描述符
* buffer ->存放数据的容器
* offset ->往buffer里写的偏移量
* leng -->长度
*position ->文件当前的读取位置
*/
var buffer = new Buffer(3);

fs.readSync(fd,buffer,0,3,0);
console.log(buffer.toString())