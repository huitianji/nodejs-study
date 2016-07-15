require("!style!css!./style.css");
document.write(" [&nbsp;] hello-welcome &nbsp;");

{
//require('./lib/jquery/jquery.js');//正常来这么写。。比较长。可以整个别名
//require("jquery");
}
require('expose?$!jquery');
require('./people.js');
//es6专有的 import
import {name,getName} from './person.js';

getName();