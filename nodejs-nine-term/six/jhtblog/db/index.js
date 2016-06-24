var settings = require("../settings")
var mongoose = require("mongoose");
mongoose.connect(settings.dbUrl);//链接数据库
mongoose.model('User',new mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    avatar:{type:String,require:true}
}));
global.Model = function(type){
    return mongoose.model(type);
}