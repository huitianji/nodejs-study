/**
 *util
 *
 * util.inherits(Child,Parent);//继承 。。。  Child 继承 Parent
 *
 *
 */

var util = require("util");

function Parent(){
    this.name = "hth";
    this.age = 5;
    this.say = function(){
        console.log("hell",this.name);
    }
}
Parent.prototype.showName = function(){
    console.log(this.name);
}
function Child(){
    this.name = "Child";
}
//不能传输。会继承。私有属性
//Child.prototype = new Parent();// Parent.prototype
//Child.prototype = Object.create(parent.prototype);

util.inherits(Child,Parent);//继承 。。。  Child 继承 Parent


var child = new Child();
child.showName();
//Object  Parent Child
console.log(child.__proto__.__proto__.__proto__ == Object.prototype);

/////////////
function Person(){
    this.name = "name-person";
    this.parent = {
        name : "parents"
    }
}

Person.prototype.toString = function(){
    console.log("this is = ",this.name);
}

var p = new Person();
console.log(p.toString());//
/**
 * 【inspect】
 * showHidden  是否显示隐藏属性
 * depth  对象递归显示的深度
 * colors  是否显示颜色
 *
 */

console.log(util.inspect(p,true,0,true));//{ name: 'name-person' }

var arr1 = [1,2];
var arr2 = [3,4];
console.log(arr1.concat(arr2));
Array.prototype.push.apply(arr1,arr2);
console.log(arr1);
console.log(util.isArray([]));
















