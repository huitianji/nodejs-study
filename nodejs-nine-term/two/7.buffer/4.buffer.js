//三种构建buffer方法
var buf1 = new Buffer(3);
    buf1[0] = 0x61;
    buf1[1] = 0x62;
    buf1[2] = 0x63;
buf1.fill(0);
var buf2 = new Buffer([0x61,0x62,0x63]);
var buf3 = new Buffer("abc","utf-8");

//console.log();
///////////////////////////////////////
var buf4 = new Buffer("中","utf-8");//"ascii"->标示英文字符
//console.log(buf4);//<Buffer e4 b8 ad>
//一个汉字3个字节
var str = "中国";
var buf5 = new Buffer(str,"utf-8");
//console.log(str.length);//长度 2
//console.log(buf5.length);//字节数  6
//console.log(buf5.toString("utf-8"));//编码
//一个英文字符一个[字节]
var buf5 = new Buffer(12);
buf5.write("中国",0,6);
buf5.write("aa",6,2);
//console.log(buf5.toString());
///////////////////////
var buffer = new Buffer("中国人民");
var b1 = buffer.slice(0,7);//7
var b2 = buffer.slice(7);//5
//console.log(b1.toString());
//console.log(b2.toString());
//中国�
//��民
//解决方案
var StringDecoder = require("string_decoder").StringDecoder;
var decoder = new StringDecoder();
//console.log(decoder.write(b1));
//console.log(decoder.write(b2));
var srcBur = new Buffer([4,5,6,7]);
var tarBuf = new Buffer(7);
tarBuf[0] = 1;
tarBuf[1] = 2;
tarBuf[2] = 3;
srcBur.copy(tarBuf,3,0,4);
//console.log(tarBuf);
var buf1 = new Buffer([1,2,3]);
var buf2 = new Buffer([4,5,6]);
var buf = Buffer.concat([buf1,buf2],6);
console.log(buf);