var url = require("url");
var urlObj = url.parse("http://jht:123@www.baidu.com:80?name=jht#top",true);
console.log(urlObj);
console.log(url.format(urlObj));
/*
* { protocol: 'http:',
 slashes: true,
 auth: 'jht:123',
 host: 'www.baidu.com:80',
 port: '80',
 hostname: 'www.baidu.com',
 hash: '#top',
 search: '?name=jht',
 query: { name: 'jht' },
 pathname: '/',
 path: '/?name=jht',
 href: 'http://jht:123@www.baidu.com:80/?name=jht#top' }

 http://jht:123@www.baidu.com:80/?name=jht#top
 */