
//exports = module.exports;

var Person = function(name,age){
        this._name = name;
        this._age = age;
}
Person.prototype.getName = function(){
    return this._name;
}
Person.prototype.setName = function(){
    this._name;
}
Person.prototype.getAge = function(){
    return this._age;
}
Person.prototype.setAge = function(){
   this._age;
}

Person.prototype.home = "bj";
Person.staticName = "mmmmmmm";

//exports = Person;  --- false
module.exports = Person;

console.log("welcome--me");





