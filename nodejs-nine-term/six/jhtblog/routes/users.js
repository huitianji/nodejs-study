var express = require('express');
var router = express.Router();

//也可以是路由
router.use(function(req,res,next){
  console.log('user   user');
  next();
});
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/hello', function(req, res, next) {
  res.setHeader('Content-Lenght','5');
  res.send('hello');
});
module.exports = router;
