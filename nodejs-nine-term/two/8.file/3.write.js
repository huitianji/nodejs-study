var fs = require("fs");
/*
*read r   write w execute
* 读      写       执行ss
* 4       2         1
* -rw-  自己创建着拥有的权限
* r--   所属组
* r--   其他人
*
* */
fs.writeFile("index.txt","测试第一行",{encoding:"utf-8",flag:"w"},function(err){
    console.log(err);
});
//a -->追加
//fs.writeFile("index.txt",new Buffer("测试第2行"),{encoding:"utf-8",flag:"a"},function(err){
//    console.log(err);
//});
//追加。。。
fs.appendFile("index.txt",new Buffer("追加。。"));
/*
* base64
* base是把3个8位字节  转成4个6位字节  然后在六位字节前补两个零
*
*
* */

var buf = new Buffer("中");
console.log(buf);
//e4 b8 ad