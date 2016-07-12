var gulp = require("gulp");


gulp.task("copy-js",function(){
    console.log("copy");
});


gulp.task('default',function(){
    gulp.watch('app/**/*.js',['copy-js'])
});