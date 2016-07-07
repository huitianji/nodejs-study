//注册表
var registry = {
    $http:{},
    countService:{
        count:0,
        add:function(){
            this.count++;
        }
    }
}
function greet(countService){
    countService.add();
    console.log(countService.count);
}
var inject = function(greet){
    var src = fun.toString();
    var matcher = str.match(/function\s?\w+\c((\w+)\)/);
    var argnames = matcher.slice(1);
    var args = [];
    for(var i=0;i<argnames.length;i++){
        var argObj = registry[argnames[i]];
        args.push(argObj);
    }
    fun.apply(context,args);
}
inject(greet);