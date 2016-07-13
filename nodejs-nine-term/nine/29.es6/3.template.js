
'use strict'
//let  name = 'jht';
let ages = 1;
//console.log('${name} is ${age} years old');
//var words = print`${name} is ${age} years old`;
//console.log(words)
//function print(strings,values){
//    console.log(arguments)
//}
function print(strings,name,age){
    var values = Array.prototype.slice.call(arguments,1);
    var str = "";
    for(var i =0,len = values.length;i<len;i++){
        str +=(strings[i] + values[i]);
    }
    str += strings[i];
    return str;
}