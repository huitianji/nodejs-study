require("!style!css!./style.css");
document.write("hello");


//require('./lib/jquery/jquery.js');//正常来这么写。。比较长。可以整个别名
require("jquery");
require('expose?$!jquery');
require('./people.js');