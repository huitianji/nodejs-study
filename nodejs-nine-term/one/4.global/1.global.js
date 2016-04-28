/**
 * global === window  全局对象
 * module   当前模块对象
 * exprots  //导出对象
 * require  //加载模块的方法
 * __dirname   //当前模块所在目录的绝对路径
 * __filename  //当前模块的绝对路径
 *
 */
    function x(module,exports,require,__dirname,__filename){//__dirname:当前模块所处的目录    __filename:代表当前的文件
        var name = "jth";
        exports.name = name;
        //console.log(this); // this --->exports
        console.trace();//显示当前的调用当前的堆栈

    }

//console.log(global);


/*
* setImmediate: [Function],
 clearImmediate: [Function],
 pid: 8988, 进程id
 process  当前的进程对象
* */

 /*
* 1.当前模块声明的变量
* 2.外部导入的模块
* 3.全局对象
* 4.从外界传入的参数
* */

//监听标准输入

process.stdin.on('data',function(){
    console.log(data.toString());
});
//标准输出
process.stdout.write("hello");

//
console.log(process.pid);

process.argv.forEach(function(val,index,array){
    //console.log(val);
    //console.log(index);
    //console.log(array)
});

process.on('exit',function(){
    console.log("退出钱之前")
});

try{
    console.log(a);
}catch(e){
    console.log(e.message);
}


process.on('uncaughtException',function(e){
    console.log('uncaughtException',e.message);
});