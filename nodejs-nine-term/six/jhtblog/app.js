var express = require('express');
var path = require('path');//处理路径
var favicon = require('serve-favicon');//处理收藏夹图标的
var logger = require('morgan');//处理日志
var cookieParser = require('cookie-parser');//处理 cookie req.cookie  req.cookies
var bodyParser = require('body-parser');//解析请求体的
///
var session = require("express-session");
var MongoStore = require("connect-mongo/es5")(session);
///
var routes = require('./routes/index');//根路由
var users = require('./routes/users');//用户路由
//add-
var articles = require("./routes/articles");//文章路由

require("./util");
require("./db");//直接查找到index.js
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//设置模板的存放路径
/**
app.set('view engine', 'ejs');//模板引擎
 */
/*模板文件改成html格式  [views --> error.html / index.html  ]*/
app.set('view engine', 'html');//模板引擎
app.engine('html',require('ejs').__express);//设置对html文件的渲染方式


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));//指定日志输出的格式
app.use(bodyParser.json());//处理json 通过Content-Type 来判断是否由自己处理
app.use(bodyParser.urlencoded({ extended: false }));//处理form-urlencoded
app.use(cookieParser());//处理cookie 把请求头中的cookie转成对象，加入一个cookie函数的属性
///
var setttings = require("./settings");
app.use(session({
  resave:true,
  store:new MongoStore(setttings)
}));
///
app.use(express.static(path.join(__dirname, 'public')));//静态文件服务

app.use('/', routes);
app.use('/users', users);
app.use('/articles',articles);


// catch 404 and forward to error handler
//捕获404错误并且转发到错误处理中间件
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler   生成环境下的错误
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);//设置响应代码
  res.render('error', {//渲染模板 模板文件 参数数据
    message: err.message,
    error: {}
  });
});


module.exports = app;
