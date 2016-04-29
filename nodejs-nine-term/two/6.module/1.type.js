/**
 *
 */
var p = require("./person");//js模块
//var json = require("./json");//json模块

/*
*
* */
var fs = require("fs");
var result = fs.readFileSync("json.json","utf-8");
var json = JSON.parse(result);



console.log(json);
console.log(p);