var gulp = require("gulp");
var path = require("path");
var fs = require("fs");

//var $ = require("gulp-load-plugins")();
var $ = load();

function load(){
    var devDependencies = JSON.parse(fs.readFileSync('package.json')).devDependencies;
    var $ = {};
    for(var attr in devDependencies){
        if(attr.indexOf('gulp-') == 0){
            $[attr.slice(5)] = require(attr);
        }

    }
    return $;
}

gulp.task('default',function(){
    gulp.src('app/*.js')
        .pipe($.concat('all.js'))//all.js合并的新 的文件的名字
        .pipe(gulp.dest("dist"));
});