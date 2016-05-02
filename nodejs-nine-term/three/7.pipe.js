var fs = require("fs");
var rs = fs.createReadStream("./read.txt");
var ws = fs.createWriteStream("./write.txt");

rs.pipe(ws);

rs.on("data",function(data){
    var flag = ws.write(data);//有返回值。。false/true
    if(!flag){
        rs.pause();//暂停
    }
});
ws.on("drain",function(){
    rs.resume();//恢复
});