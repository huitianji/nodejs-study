var gulp = require("gulp");
var path = require("path");
var fs = require("fs");


gulp.task('default',function(){
    /*
    * 监听之前：
    * s*/
    gulp.src("app/**/*.js").pipe(
        gulp.dest("dist")
    );
    //监听
    gulp.watch('app/**/*.js',function(event){
        //event.path  event.type

        //console.log(event.path,event.type);
        //event.path =》d:\jihuitian\nodejs-study\nodejs-nine-term\nine\28.gulp\gulpfile.js default
        //console.log(event.path);//d:\jihuitian\nodejs-study\nodejs-nine-term\nine\28.gulp\app\cs.js
        //console.log(path.resolve("app").length);//59
        //console.log(event.path.slice(path.resolve("app").length));//cs.js
        //
        //console.log(
        //    path.join(
        //        'dist',event.path.slice(path.resolve("app").length)
        //    )
        //);
        console.log(event.type);
        //===>dist\cs.js
        switch(event.type){
            case "added":

                fs.createReadStream(event.path).pipe(
                    fs.createWriteStream(path.join('dist',
                        event.path.slice(path.resolve("app").length)
                    ))
                );

                //fs.readFile(event.path,function(err,data){
                //    fs.writeFile(
                //        path.join('dist',
                //            event.path.slice(path.resolve('app').lenght)
                //        ),
                //        data
                //    );
                //});
                break;
            case "changed":
                fs.createReadStream(event.path).pipe(
                    fs.createWriteStream(
                        path.join(
                            'dist',event.path.slice(path.resolve("app").length)
                        )
                    )
                );
                break;
            case "deleted":
                fs.unlink(path.join('dist',
                    event.path.slice(path.resolve('app').length)
                ));
                break;
            default:

                break;
        }
    })
});