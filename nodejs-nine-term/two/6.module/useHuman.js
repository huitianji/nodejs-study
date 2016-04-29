
var Person = require("./Human");


console.log(require.cache);///缓存
delete require.cache[require.resolve('./Human')];//清除缓存

var Person = require("./Human");

var p1 = new Person("p1",10);
var p2 = new Person("p2",1);


console.log(p1.getName(),p1.getAge());
console.log(Person.staticName);


