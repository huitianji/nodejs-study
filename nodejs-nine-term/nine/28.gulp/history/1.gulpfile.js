var gulp = require("gulp");

gulp.task("hello",function(){
    console.log("hello")
});

gulp.task("default",['hello'],function(){//执行的时候。依赖hello 。执行的时候先执行hello
    console.log("hello")
});