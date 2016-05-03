var fs = require("fs");
var rs = fs.createReadStream("./request.txt");
//解析头部
var StringDecoder = require("string_decoder").StringDecoder;//解决乱码问题

function parseHeader(callback){
    var headers = "";
    rs.on("readable",onReadable);
    var decoder = new StringDecoder();
    function onReadable(){
        var chunk;
        while(null != (chunk = rs.read())){
            var str = decoder.write(chunk);
            if(str.match(/\r\n\r\n/)){
                var splits = str.split(/\r\n\r\n/);
                headers += splits.shift();
                rs.removeListener("readable",onReadable);
                var remain = splits.join("/\r\n\r\n/");
                var buffer = new Buffer(remain,"utf-8");
                if(buf.length){
                    rs.unshift(buf);
                }
            }else{
                headers += str;
            }
        }
    }
}
parseHeader(function(headers){
    console.log(headers);
    rs.on("data",function(data){
        console.log(data.toString());
    });
});