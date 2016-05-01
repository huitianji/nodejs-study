npm  install nvm-win@latest
版本切换

stackoverflow

问题提问.比如服务异常。配置等等

npm  init
初始化

npm  install -global [package name]
//////////////////////////////////////////////////


npm install mime

npm install async --save
npm install mysql --save

//////////////////////////////
npm shrinkwrap --dev

////////---01
$npm shrinkwrap

运行上面这个命令以后，会在项目目录下生产一个npm-shrinkwrap.json文件，里面包含当前项目
（读取的是node_modules文件夹里的文件）用到的所有依赖（包括依赖的依赖，以此类推），以及
他们的准确版本，有就是当前正在使用的版本。只要存在npm-shrinwrap.json文件。下一次用户
使用npm install命令安装依赖的时候，就会安装所有版本完全相同的模块。如果执行npm shrinkwrap
的时候，加上参数dev，还可以记录devDependencies字段中模块的准确版本

$npm shrinkwrap --dev

//////////---02
npm prune  命令与npm shrinkwrap 配套使用。使用npm shrinkwrap 的时候，有时可能存在某个
已经安装的模块不在dependencies字段内的情况，这时npm shrinkwrap就会报错

npm  prune 命令可以移除所有不在dependencies字段内的模块。如果指定模块名。则移除指定的模块

npm prune
npm prune <package name>

//发布包
npm adduser


 git config --global user.email "you@example.com"
 git config --global user.name "Your Name"
//////////////////////////////////////////////////////////////////////////
