//function Person(){
//    this.name = 'jht';
//    return {name:'jht2'};
//}
//var p = new Person();
//console.log(p.name);
'use strict';
class Person{//类
    constructor(name){
        this.name = name;
        this.age = 6;
        this.hobbies = [];
    }
    getName(){
        console.log(this.name)
    }
    get hobby(){
        return this.hobbies;
    }
    set hobby(hobby){
        this.hobbies.push(hobby);
    }
}
class Student extends Person{
    constructor(name){
        super(name);
    }
    getStuNo(){
        console.log("945");
    }
    getName(){
        console.log(super.getName(),this.name)
    }
}
var p = new Person('jth');
console.log(p)