/*! //jht */
webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _person = __webpack_require__(1);

	__webpack_require__(2);
	document.write(" [&nbsp;] hello-welcome &nbsp;");

	{
	  //require('./lib/jquery/jquery.js');//正常来这么写。。比较长。可以整个别名
	  //require("jquery");
	}
	__webpack_require__(7);
	__webpack_require__(10);
	//es6专有的 import


	(0, _person.getName)();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getName = getName;
	var name = exports.name = '----jht----';
	function getName() {
	    console.log(name);
	}

/***/ }
]);