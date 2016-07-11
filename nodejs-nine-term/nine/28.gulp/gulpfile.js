var gulp = require("gulp");

//gulp.task("hello",function(){
//    gulp.src("app/src.js")
//    //gulp.src(["app/src.js","app/src2.js"])
//        .pipe(gulp.dest('dist'));// 写的是目录
//});

//gulp.task("hello",function(){
//    //有通配符开始出现的那部分路径为  '**/*.js'
//    gulp.src("app/**/*.js")
//        //gulp.src(["app/src.js","app/src2.js"])
//        .pipe(gulp.dest('dist'));// 写的是目录
//});
gulp.task("hello",function(){
    //有通配符开始出现的那部分路径为  '**/*.js'
    gulp.src(["app/bootstrap/*.js","app/jquery/*.js"],{base:'app'})
        //gulp.src(["app/src.js","app/src2.js"])
        .pipe(gulp.dest('dist'));// 写的是目录
});