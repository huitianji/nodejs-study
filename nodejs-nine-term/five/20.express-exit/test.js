/**
 * 加密
 * */
var crypto = require("crypto");
function getHash(str){
    var shasum = crypto.createHash('sha1');
    return shasum.update(str).digest('hex');
}
console.log(getHash('1').length/2);
console.log(getHash(""));
//20
//356a192b7913b04c54574d18c28d46e6395428ab
//da39a3ee5e6b4b0d3255bfef95601890afd80709