"use strict";
class Document {
    constructor(){
        this.cookies = [];
    }
    set cookie(cookie){
        this.cookies.push(cookie);
    }
    get cookie(){
        return this.cookies.join("; ");
    }
}
var document = new Document();
document.cookie = "name=jh";
//class Universe {
//    constructor() {
//        if (__instance()) return __instance();
//        //按自己需求实例化
//        this.foo = 'bar';
//        __instance(this);
//    }
//}