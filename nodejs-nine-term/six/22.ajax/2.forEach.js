var arr = [1,2,3];
arr.forEach(function(item,index,all){
    console.log(this.name,item,index,all);//this  -->  global
});
//全局的。需要做处理
var util = {
    each:(function(){
        if([].forEach){
            return function(list,fn,context){
                list.forEach(fn,context);
            }

        }else{
            return function(list,fn,context){
                for(var i = 0;i<list.length;i++){
                    fn.call(context,list[i],i,list);
                }
            }

        }
    })()
}
util.each(arr,function(item,index,all){
    console.log(this.name,item,index,all);
},{name:"jht"});
