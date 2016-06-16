var mongoose = require("mongoose");
var db = mongoose.connect("");
db.connection.on("error",function(error){
    console.log("数据库链接是不"+error);
});
db.connection.on("open",function(){
    console.log("数据库链接成功");
});
//创建Model模型--是通过数据库链接创建的
var PersonModel = db.model("Person",PersonSchema);