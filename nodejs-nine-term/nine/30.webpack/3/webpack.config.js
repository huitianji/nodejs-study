var webpack = require("webpack");
module.exports = {
    entry:'./entry.js', //定义打包的入口文件，每一个键值对，就是一个入口文件 可以是一个数组['./entry.js','./entry2.js']
    output:{    //配置打包结果
        path:__dirname,     //定义了输出的文件夹--当前目录下
        filename:'bundle.js'   //定义了打包结果文件的名称
    },
    module:{    //定义模块的加载逻辑
        loaders:[   //定义了一系列的加载器
            {test:/\.css$/,loader:'style!css'}//当需要加载的文件匹配'test'正则时。就会调用后面的`loadder`对文件进行加载
            ,
            {test:/\.(png|jpg)$/,loader:'url?limit = 4000'}//4000 == 4k 如果大小小于4k 转换成base64引入到页面里面去
        ]
    }
    ,
    plugins:[//前缀
            new webpack.BannerPlugin('//jht')
    ]
    ,
    resolve:{//别名
        alias:{
            jquery:"./lib/jquery/jquery.js"
        }
    }
}
