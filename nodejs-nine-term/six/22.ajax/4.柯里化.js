/*
* 柯里化就是预先将某些参数传入，
* 得到一个函数
* 但是预先传入的参数被保持在闭包中
*
*
* */
var time = new Date();
//function isDate(obj){
//    return  Object.prototype.toString.call(obj) == '[object Date]';
//}
function isType(type){
    return function (obj){
        return Object.prototype.toString.call(obj) == "[object " + type + "]";
    }
}
var util = {};
['Array','Object','Function','Date'].forEach(function(type){
    util["is"+type] = isType(type);
});
console.log(util.isDate(new Date()));
console.log(util.isArray([]));