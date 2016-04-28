/**
 * 事件
 * 订阅发布
 */
function Person(name){
    this.name = name;
    this._events = {};
}
//注册监听
//
Person.prototype.on = function(eventName,callback){
    if(this._events[eventName]){//有人已经订阅过了。这个事件
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback];
    }
}
Person.prototype.emit = function(eventName){
    var args = Array.prototype.slice.call(arguments,1);//把第一个去掉。。
    var callbacks = this._events[eventName];
    var self = this;
    callbacks.forEach(function(callback){
        callback.apply(self,args);
    });
}

Person.prototype.once = function(){

}


var gile = new Person();
gile.on("中国人",function(){
    console.log("zhaongguor===这个歌");
});
gile.on("中国人",function(){
    console.log("zhaongguor===第二个");
});
gile.emit("中国人");