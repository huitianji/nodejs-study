var util = {
    bind:(function(){
        if(Function.prototype.bind){
            return function(func,context){
               return func.bind();
            }
        }
        return function (func,context){
            return function(){
                func.apply(context,arguments);
            }
        }
    })()
}