//var gutil = require("gulp-util");
var gulp = require("gulp");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
gulp.task("webpack",function(callback){
    var myConfig = Object.create(webpackConfig);
    webpack(
        //configuration
        myConfig
        ,
        function(err,stats){
            callback();
        }
    );
});
gulp.task("default",function(){
    gulp.watch("./**",['webpack']);//监控任何文件的变化
});