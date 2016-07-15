/*
* 生成器
* function* 生成器的函数
* yield关键字
*
* 可以生成一个迭代器
* */
{
/*
    function* say(){
        yield 'a';
        yield 'b';
    }
    var says = say();
    console.log(says.next());//{value:'hello',done:false}//能得到东西返回false
    console.log(says.next());//{value:'word',done:false}
    console.log(says.next());//{value:undefined,done:true}
*/
}
function* say(words){
   for(var i=0,len=words.length;i<len;i++){
        yield words[i];
   }
}
var says = say(['hello','work']);
console.log(says.next());//{value:'hello',done:false}//能得到东西返回false
console.log(says.next());//{value:'word',done:false}
console.log(says.next());//{value:undefined,done:true}