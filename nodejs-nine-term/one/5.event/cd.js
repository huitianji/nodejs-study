function Person(){
    this.name = "jht";
    return {name:"jj"};
}
/*
* 创建空对象
* 把空对象作为this 传入Person
* 返回这个对象
* */
var p = new Person();
console.log(p.name);

var P2 = Person.bind({});
var p2 = new P2;
console.log(p2.name)
