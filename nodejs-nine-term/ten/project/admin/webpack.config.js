var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry:"./app.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js"
    },
    resolve:{//别名
        root:["./src"],//从哪个文件读取
        extensions:["",'js','css']//扩展名--不用加扩展名字

    },
    loaders:[
        {
            test:/\.jade$/,
            loader:'jade',
            exclude:/node_modules/
        }
        ,
        {
            test:/\.less$/,
            loader:'style!css',
            exclued:/node_modules/
        }
        ,
        {
            test:/\.js$/,
            loader:'babel',
            query:{
                presets:['es2015']
            },
            exlude:/node_modules/
        }
        ,
        {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
}