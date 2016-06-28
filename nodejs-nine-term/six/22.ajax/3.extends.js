var utils = {
    /*
    *1.默认配置
    * 2.用户自定义的
    * */
    extends:function(_defaultOptions,options){
        var result = {};
        for(var attr in _defaultOptions){
            result[attr] = options[attr] || _defaultOptions[attr];
        }
        return result;
    }
}
var _defaultOptions = {
    name:'jht',
    age:6
}
var options = {
    age:7,
    name:"jht2"
}
console.log(utils.extends(_defaultOptions,options))