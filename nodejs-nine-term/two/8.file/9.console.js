var fs = require("fs");
/*
* 0  stdout
* 1 stdin
* 2 stderr
* */
setTimeout(function(){
    var buffer = new Buffer(1);
    fs.read(0,buffer,0,1,0,function(err){
        console.log(buffer)
    });
},3000);