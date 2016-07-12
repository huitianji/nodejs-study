var gulp = require("gulp");
var connect = require('gulp-connect');
//var $ = require("gulp-load-plugins")();
//
gulp.task("server",function(){
    connect.server({
        root:'dist',//服务器的根目录
        port:8080//服务器的地址，没有此配置项默认也是8080
    });
});

gulp.task('default',['server']);





















//var $ = load();
//
//function load(){
//    var devDependencies = JSON.parse(fs.readFileSync('package.json')).devDependencies;
//    var $ = {};
//    for(var attr in devDependencies){
//        if(attr.indexOf('gulp-') == 0){
//            $[attr.slice(5)] = require(attr);
//        }
//
//    }
//    return $;
//}