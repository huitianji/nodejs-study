##安装生成器
npm install express-generator -g

##生成项目
express -e jhtblog

#进入生成目录并安装依赖的模块
cd ->jhtblog
npm install
安装依赖包

#设置环境变量并启动服务
SET DEBUG = jhtblog: * & npm start


/**
*set PORT:4000
*/


/*增加一点*/
git remote add origin git@github.com:文件名/jhtblog.git
/*end*/

--------------------------------------------------------------------------------------------------

req.query(处理get请求，获取查询字符串)
    GET /index.html?name=jht
    req.query.name  -> jht
req.params(处理/:name形式的get 或 post请求，获取请求参数)
    GET /user/jht
    req.params.name ->jht
req.body(处理post请求，获取post请求体)
    req.body.name


-------------------------------------ejs模板引擎----------------------------------------------------
<%= code%>  完全显示

<%- code%>则会显示 H1大的 hello 字符串

页面布局
<%- include a %>
hellow,word!
<%- include b %>

--------------------------------------bower--------------------------------------------------------------------
安装 bower
npm install bower -g

初始化bower
bower init

name  ->jhtblog
description -> this is a  blog
main file
keywords -> blog
authors


----------------///-------------------
创建配置文件    .bowerrc
{"directory":"./public/lib"}
这表示以后bower安装的模块都安装在  ./public/lib下面
























