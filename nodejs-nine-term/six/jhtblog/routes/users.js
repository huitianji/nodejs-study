var express = require('express');
var router = express.Router();

//也可以是路由
//router.use(function(req,res,next){
//  console.log('user   user');
//  next();
//});
/* GET users listing. */
//用户处理的时候发两次请求，一次是get..弟二次是post
/*用户注册*/
router.get('/reg', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('user/reg',{title:"用户注册"});
});
router.post('/reg', function(req, res, next) {
  var user = req.body;
  if(user.password != user.repassword){
    var errMsg = "密码和确认密码不一致";

    return res.redirect("back");//回退到上一个页面
  }
  delete  user.repassword;
  user.password = blogUtil.md5(user.password);
  user.avatar = "https://secure.gravatar.com/avatar/"+blogUtil.md5(user.email)+"?s=48";
  new Model('User')(user).save(function(err,doc){
    if(err){
      return res.redirect("back");//回退到上一个页面
    }else{
      req.redirect('/');
    }

  });

});
/*用户登录*/
router.get('/login', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('user/login',{title:"用户登录"});
});
router.post('/login', function(req, res, next) {
  res.redirect("/");
});
/*用户退出*/
router.get('/logout', function(req, res, next) {
  //redirect  => 重定向
  res.redirect("/");
});

//router.get('/hello', function(req, res, next) {
//  res.setHeader('Content-Lenght','5');
//  res.send('hello');
//});
module.exports = router;
