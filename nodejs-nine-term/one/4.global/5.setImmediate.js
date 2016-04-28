/**
 *
 */
var fs = require("fs");

fs.readFile("1.txt",function(err,data){
    console.log(data.toString());
});

setTimeout(function(){
    console.log("c  setTimeout");
},0);
setImmediate(function(){
    console.log("a setTmmediate");
    setImmediate(function(){
        console.log("b setTmmediate");
    });
});

//先执行
//nextTick > setTimeout > setImmediate > 异步