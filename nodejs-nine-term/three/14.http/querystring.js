/**
 *
 */
var querystring = require("querystring");
var obj = querystring.parse("name=jth&address=bj");//转换成对象
console.log(obj);//{ name: 'jth', address: 'bj' }
var obj = querystring.parse("name@jth;address@bj",";","@",{maxKeys:2});//转换成对象
console.log(obj);//{ name: 'jth', address: 'bj' }

console.log(querystring.stringify(obj));//name=jth&address=bj