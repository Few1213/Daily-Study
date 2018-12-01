// // 1- 引入 http 模块
// const http = require('http');

// // 2- 创建一个服务器 
// const server = http.createServer(); 

// // 4- 监听请求，处理请求
// // 通过req获取请求报文数据
// // 通过res设置响应报文的数据 
// server.on('request', function (req, res) {
//     console.log('我来处理请求了');
//     //设置响应报文 ，返回给浏览器即可
//     //设置响应主体的
//     res.write('hello'); 
//     res.end();  //告诉浏览器服务器响应完成
// });


// // 3- 设置端口，打开服务器
// server.listen(9999, function () {
//     console.log('http://localhost:9999 服务器已启动');    
// });

// http 模块

// // 引入 http 模块
// const http = require('http');

// // 创建一个服务器
// const sever = http.createServer();

// // 监听请求,处理请求
// sever.on('request',function (req,res) {
//     console.log('正在处理');
//     res.write('hello world');
//     res.end();
//   })

// // 指定端口,开启服务器
// sever.listen(9999,function () {
//     console.log('http://localhost:9999 服务器开启成功');
    
//   })

// // 引入 http 模块
// const http = require('http');
// // 创建服务器
// const sever = http.createServer();
// //监听请求
// sever.on('request',function (req,res) { 
//     console.log('正在处理请求');
//     res.end('hh');
//  });
// // 设置端口 开启服务器
// sever.listen(9999,function () { 
//     console.log('http://localhost:9999 服务器开启了');
    
//  })


// 引入 http 模块
const http = require('http');
const sever = http.createServer();
sever.on('request',function (req,res) { 
    console.log('服务器正在处理');
    res.end('1111111');
    
 });
sever.listen(9999,function () { 
    console.log('http://localhost:9999 服务器开启了');
    
 })


