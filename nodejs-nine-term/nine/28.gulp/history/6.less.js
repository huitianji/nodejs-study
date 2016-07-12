var gulp = require("gulp");
var path = require("path");
var fs = require("fs");
var less = require('gulp-less');
//var $ = require("gulp-load-plugins")();
//
gulp.task("less",function(){
    return gulp.src('app/less/*.less').pipe(less())
        .pipe(
            gulp.dest("dist/css")
        );
});

gulp.task('default',['less']);





















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