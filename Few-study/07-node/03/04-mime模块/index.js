// mime模块 
// 作用 动态设置mime类型 
// 使用步骤： 
// 1-安装mime模块  npm i mime 
// 2-引入模块模块
const mime = require('mime'); 

//mime.getType(文件名)  返回对应的mime类型 

// 3-使用mime模块的功能  
// console.log(mime.getType('aa.jpg'));
// console.log(mime.getType('/data/bb.txt'));
// console.log(mime.getType('cc.html'));
// console.log(mime.getType('dd.avi'));
// console.log(mime.getType('ff.css'));
// image/jpeg
// text/plain
// text/html
// video/x-msvideo
// text/css

//通过mime类型获取拓展名
console.log(mime.getExtension('text/html'));  //html
console.log(mime.getExtension('text/css'));  // css







