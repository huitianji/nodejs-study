//require('jquery');
require('expose?$!expose?jQuery!jquery');
require("bootstrap-webpack");
//require("angular");
//require("angular-ui-router");
//require("angular-resource");
import  angular from 'angular';
import uiRouter from  'angular-ui-router';
import ngResource from 'angular-resource';
import routesConfig from 'routesConfig';
import index from "pages/index";


angular.module('jhtMall',[uiRouter,ngResource,index])
    .config(routesConfig);