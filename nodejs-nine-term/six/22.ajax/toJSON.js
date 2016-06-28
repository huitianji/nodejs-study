var util = {
    parseJSON:(function(){
        if(global.JSON){
            return function (data){
                return global.JSON.parse(data);
            }
        }else{
            return function (data){
                return new Function('return' + data)()
            }
        }
    })()
}