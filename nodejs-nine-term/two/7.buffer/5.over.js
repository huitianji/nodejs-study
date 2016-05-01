var buf = new Buffer(2);//0---255之间
buf[0] = -10;
buf[1] = 260;
//如果大于255 会对256取模
//如果小于0，则先模上256 ，然后再加上256
console.log(buf);