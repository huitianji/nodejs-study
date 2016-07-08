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


------开发文档--------
docs.ngnice.com/api

--------------------

















