var gulp = require("gulp");
var connect = require('gulp-connect');
//var $ = require("gulp-load-plugins")();
//

gulp.task('copy-html',function(){
    gulp.src('app/index.html')//指定源文件
        .pipe(gulp.dest('dist'))//拷贝到dist目录
        .pipe(connect.reload());//通知浏览器重启
});

gulp.task('watch',function(){
    gulp.watch('app/index.html',['copy-html']);//当index.html文件变化时执行coyp-html任务
});

gulp.task("server",function(){
    connect.server({
        root:'dist',//服务器的根目录
        port:8080,//服务器的地址，没有此配置项默认也是8080
        livereload:true//启用实时刷新功能
    });
});

gulp.task('default',['server','watch']);//运行次任务的时候会在8080上启动服务器





















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