var express = require('express');
//返回一个路由的实例
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '欢迎光临jht博客' });
});
//router.get('/middle',function(req,res,next){
//  res.render('middle');
//});
module.exports = router;
