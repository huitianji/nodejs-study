## 利用 bower  安装  angular

bower install angular


---------------

通过     ng-model    实现双向绑定
<div ng-app>
    <input type='text' ng-model='name'>
    {{name}}
</div>


2>.
<span ng-bind="name"></span>

用ng-bind避免闪烁

==--------------------------==

<div ng-init="name='jht'">
    <!--{{name}}-->
    <span ng-bind="name"></span>
</div>

name 优先读取 ng-init里面name的值

=+-----------------------------+=
ng-class 用于动态自定义dom元素的css
scope 变量绑定
function crt($scope){
    $scope.test = "classname";
}
<div class='{{test}}'></div>
对象 key/value处理
<div ng-class="{'has-error':username.length>6}"'></div>

=+-----------------------------+=
ng-include
<div ng-include = "'header.html'"></div>


=+-----------------------------+=

指令在注入器中的登记名称是：指令名 + Directive 例如：ng-app指令的服务名称是：ngAppDirective

=+-----------template 定义 替换模板-----------------+=
~template 指明一个HTML片段可以用来替换指令的内容
~如果replace = true，那么用HTML片段替换指令本身
~如果transclude属性为true 则包裹指令的内容
    "replace为true时，要求模板必须有一个根节点"

    匹配模式restrict
    E   元素
    A   属性
    C   样式类
    M    注释

+-----------------scope-------------------------+

@    把当前属性作为字符串传递。你还可以绑定来自外层scope上的值，在属性中插入{{}}即可

=     与父scope中的属性进行双向绑定

&     传递一个来自父scope中的函数，稍后调用

+---------------------compile-----------------------------+
编译函数用于实现对模板自身的转换，此时无法访问scope对象
适合修改节点，插入子模板，最后返回postLink函数
    参数
    element     未link过的原始DOM节点
    attrs       原始DOM节点上的属性








------开发文档--------
docs.ngnice.com/api

--------------------


-----------------【单元测试】-----------------------------------
{
    【*** npm install karma --save-dev】
    【*** npm install karma-jasmine karma-chrome-launcher --save-dev】
    【*** npm install -g karma-cli】
    【会有一个node_modules目录，里面包含刚才安装的karma、karma-jasmine、karma-chrome-launcher目录，当然还包含了jasmine-core目录】
    【cd node_modules】
    【karma start】
    【手动打开Chrome，输入localhost:9876，如果看到这个页面，证明已经安装成功】

    【*** karma init】
    【*** npm install angular-mocks】
    【模块的注入加载angular-mocks.js】
    【【运行】karma start karma.conf.js】
}
*** npm install karma --save-dev
*** npm install karma-jasmine karma-chrome-launcher --save-dev
*** npm install -g karma-cli
会有一个node_modules目录，里面包含刚才安装的karma、karma-jasmine、karma-chrome-launcher目录，当然还包含了jasmine-core目录
cd node_modules
karma start
手动打开Chrome，输入localhost:9876，如果看到这个页面，证明已经安装成功

{
npm install karma -g
npm install -g karma-cli
}
{
1. 测试框架：我们当然选jasmine

2. 是否添加Require.js插件

3. 选择浏览器： 我们选Chrome

4. 测试文件路径设置，文件可以使用通配符匹配，比如*.js匹配指定目录下所有的js文件（实际操作中发现该路径是karma.conf.js文件的相对路径，详见下面我给出的实际测试配置及说明）

5. 在测试文件路径下，需要排除的文件

6. 是否允许Karma监测文件，yes表示当测试路径下的文件变化时，Karma会自动测试
}
*** karma init
    >jasmine     //使用哪个测试框架
    >no
    >chrome
    >yes


*** npm install angular-mocks
---【什么是jasmine】---
jasmine是一个行为驱动开发的测试框架，不依赖任何js框架以及dom,
是一个非常干净以及友好api的测试库
。describe函数来定义测试大体的中心内容
。it是用来定义单个具体测试任务
。expect主要用来计算一个变量或者一个表达式的值
。beforeEach与afterEach主要是用来在执行测试任务之前和之后做的一些事情

--【运行】
karma start karma.conf.js

--【NG的单元测试】--
模块的注入加载
angular-mocks.js


angular.mock.module
。module是用来配置inject方法注入的模块信息，参数可以是字符串，函数，对象，可以像下面这样使用
beforeEach(
    module('myApp.filters');
    beforeEach(function($provide){
        $provide.value('version','TEST_VER');
    })
);

--【测试控制器】--
controller作用是对scope进行初始化，赋予数据，赋予行为，所以测试控制器就是测试scope的值是否正确










