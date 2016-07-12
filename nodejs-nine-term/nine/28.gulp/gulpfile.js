var gulp = require("gulp");
var concat = require("gulp-concat");
var connect = require('gulp-connect');
//var $ = require("gulp-load-plugins")();
var uglify = require("gulp-uglify");
//
gulp.task('uglify',function(){
    return gulp.src(['app/*.js','!app/*.tmp.js'])//指定要处理的文件
        .pipe(concat('main.js'))//把多个js文件合并成一个文件
        .pipe(uglify())//对合并后的main.js文件进行压缩
        .pipe(gulp.dest('dist/js'));//输出到目的地
});


gulp.task('default',['uglify']);//运行次任务的时候会在8080上启动服务器





















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
{
    //gulp.task('copy-html',function(){
    //    gulp.src('app/index.html')//指定源文件
    //        .pipe(gulp.dest('dist'))//拷贝到dist目录
    //        .pipe(connect.reload());//通知浏览器重启
    //});
    //
    //gulp.task('watch',function(){
    //    gulp.watch('app/index.html',['copy-html']);//当index.html文件变化时执行coyp-html任务
    //});
    //
    //gulp.task("server",function(){
    //    connect.server({
    //        root:'dist',//服务器的根目录
    //        port:8080,//服务器的地址，没有此配置项默认也是8080
    //        livereload:true//启用实时刷新功能
    //    });
    //});
}