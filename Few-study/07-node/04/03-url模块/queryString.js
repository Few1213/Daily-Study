
// 引入queryString模块  

const queryString = require('querystring');

let str = 'name=zs&age=18&sex=m';

console.log(queryString.parse(str));
