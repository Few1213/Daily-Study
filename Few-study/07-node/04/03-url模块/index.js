// 引入模块

const url = require('url');

let str = 'http:// localhost :9999/ details?id=2&age=22&name=zs ';
// id=2&age=22&name=zs 查询字符串 qeuryString

// url.parse(要解析url地址， 是否解析查询字符串 );   用于解析url地址 
// url.parse() 它主要功能是解析url的， 默认是不会解析查询字符串 

console.log(url.parse(str, true).query.id );


