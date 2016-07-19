【jade】
***   npm install jade -g
编译
    jade 1.文档声明喝头尾标签.jade

    **//** 【-P 美化  -w 监控变化】 P为大写   w 为小写
    jade -P -w  1.文档声明喝头尾标签.jade


// jade -P -w 4.var.jade -O var.json      //把数据通json传递过来  -O  O大写

----------【项目构建】---------------

 //1.安装生成器
***  npm install express-generator -g
//模拟的后端服务器..2.生成项目
***  express mock-server
//3.进入项目并安装依赖
***  cd mock-server && npm install
//4.启动项目
npm start
//5.通过浏览器访问
http://localhost:3000/

touch .gitignore
{
    node_modules
    .idea
    lib
}
##提交到git
git init

git add -A

git commit -m "创建mock-server";

git remote add origin 地址git(https://github.com/)

git push origin master

---------{2}-----------
git rm -r .idea  --cached  //缓存区 。。  -r循环  ..删除暂存区

----------------初始化package.json---------------------------
{  npm init  }

-------------------------------------
package.json

babel-core  加载es6 "^6.3.26"
babel-loader:"^6.2.0",

babel-preset-es2015  es6-》es5 :"^6.3.13"
css-loader:"^0.23.1"
expose-loader    暴露些变量的
jade
jade-loader
style-loader
webpack
webpack-dev-server
-----
gangular
angular-resource
angular-ui-router
bootstrap
bootstrap-webpack
css-loader
exports-loader
extract-text-webpack-plugin
file-loader
imports-loader
jquery
less
less-loader
style-loader
url-loader

------------------------------------
https://github.com/gowravshekar/bootstrap-webpack

-----------------【单元测试】-----------------------------------

karma init
>jasmine     //使用哪个测试框架
>no
>chrome
>yes

