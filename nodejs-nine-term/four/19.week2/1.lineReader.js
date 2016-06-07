var fs = require("fs");
var EventEmitter = require("event").EventEmitter;
var util = require("util");
function LineReader(path){
    this._rs = fs.createReadStream(path);//_rs私有变量
}
var RETURN = 0X0D;//\R
var  NEWLINE = 0X0A;//\N
util.inherits(LineReader,EventEmitter);
LineReader.prototype.on('newListener',function(eventName,callback){
    if(eventName == 'newLine'){
        var row = [];
        var self = this;
        this._rs.on('readable',function(){
            var buff;
            while(null !=(buff == this.read(1))){
                var ch = buff[0];
                if(ch == RETURN ){//换行符
                    this.read(1);
                    self.emit('newLine',Buffer.concat(row));
                    row.length = 0;
                }else{
                    row.push(ch);
                }
            }
        });
        this._rs.on("end",function(){
            if(row.length > 0){
                self.emit('newLine',Buffer.concat(row));
            }
        });
    }
});

var lineReader = new LineReader('./index.txt');
lineReader.on('newLine',function(){
    console.log(row);
});
lineReader.on('end',function(){
    console.log("end");
});
