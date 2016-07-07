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


------开发文档--------
docs.ngnice.com/api