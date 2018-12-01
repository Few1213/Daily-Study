// // 1-引入http模块
// const http = require('http');

// // 2-创建http服务器
// const server = http.createServer(); 

// // 3-监听请求，处理请求
// server.on('request', (req, res) => {
//     //header('content-type:text/html;charset=utf-8');  php 
//     // 设置响应头
//     // res.setHeader('content-type', 'text/html;charset=utf-8');
//     //设置响应主体 
//     // res.write('嘿嘿嘿');
//     // req 请求报文对象  用于获取请求报文数据
//     // res 响应报文对象  设置响应报文数据 

//     // 请求报文req的属性
//     // req.url  请求地址
//     // req.method 请求方式 
//     // req.headers

//     console.log(req.url);
//     console.log(req.method);    
//     console.log(req.headers); 

//     res.end('ok');
// });

// // 4-设置端口 打开服务器 
// server.listen(9999, () => {
//     console.log('http://localhost:9999 服务器已启动');    
// });


// // 引入 http 模块
// const http = require('http');
// // 创建一个服务器
// const server = http.createServer();
// // 监听请求
// server.on('request',function (req,res) {
//     console.log(req.url);
//     console.log(req.method);
//     console.log(req.headers);
//     console.log('正在处理中');
    
//     res.end('hh');
//   })
// server.listen(9999,function () {
//     console.log('http://localhost:9999 服务器开启了');
//   });

// const http = require('http');
// const server = http.createServer();
// server.on('request',function(req,res){
//     console.log(req.url);  // 请求的 url 地址
//     console.log(req.method); // 请求的方法
//     console.log(req.headers); // 请求头的信息
//     console.log('正在处理'); 
//     res.end('hhhh');
// });
// server.listen(9999,function () {  //端口号经历在 8000以上
//     console.log('http://localhost:9999 服务器开启了');
//  });

const http = require('http');
const server = http.createServer();
server.on('request',function (req,res) {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log('服务器正在处理');
    
    res.end('哈哈哈')
  });
server.listen(9999,function () { 
    console.log('http://localhost:9999 服务器开启了');
    
 });