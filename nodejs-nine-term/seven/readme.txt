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

















