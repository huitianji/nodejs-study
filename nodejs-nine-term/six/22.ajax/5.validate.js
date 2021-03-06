/*
*可以对传入的对象链式添加一系列验证规则，然后开始逐条验证
*
* */
var options = {
    method:'get',
    datType:'json'
}
if(!/(get|post)/.test(options.method)){
    throw Error("请求方法不合适")
}
if(!/(json|test)/.test(options.dataType)){
    throw Error('返回类型不合法');
}

function Validate(option){
    this.option = option;
    this.rules = [];
}
Validate.prototype = {
    addRule:function(key,msg,check){
        this.rules.push({
            key:key,
            msg:msg,
            check:check
        })
        return this;
    },
    start:function(){
        this.rules.forEach(function(rule){
            if(!rule.check(this.option[rule.key])){
                throw new Error(rule);
            }
        },this);
    }
}
var validate = new Validate(options);
validate.addRule('method','请求方法不合法',function(value){
    return /(get|post)/ig.test(value);
}).addRule('datType','返回类型不合法',function(value){
    return /(json|test)/ig.test(value);
});






































