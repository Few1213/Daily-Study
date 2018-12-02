// // 1-引入模块
// const http = require('http');
// // 2-创建服务器
// const server = http.createServer();
// // 3-监听请求处理请求
// server.on('request', (req, res) => {
//     // //状态码
//     // res.statusCode = 404; 
//     // // 状态文本
//     // res.statusMessage = 'bbb';
//     // //响应头
//     // res.setHeader('content-type', 'text/css');
//     //设置状态行和响应头
//     // res.writeHead(状态码， 状态文本， {响应头})

//     res.writeHead(404, 'ccc', { 'content-type': 'text/html' });

//     //处理逻辑
//     res.end('ok');
// })
// // 4-设置端口，开启服务器
// server.listen(9999, () =>{ console.log('http://localhost:9999 服务器已启动') });

// const http = require('http');
// const server = http.createServer();
// server.on('request',(req,res)=>{
//     // 设置状态码
//     res.statusCode = 404;
//     // 设置状态文本
//     res.statusMessage = 'hhh';
//     // 设置响应头
//     res.setHeader('content-type','text/html');
//     // 处理逻辑
//     res.end('ok');
// });

// server.listen(9999,()=>{
//     console.log('http://localhost:9999 服务器启动了');
// })

// const http = require('http');
// const server = http.createServer();
// server.on('request',(req,res)=>{
//     res.writeHead(200,'dddd',{'content-type':'text/html'});
//     res.end('ok');
// });
// server.listen(9999,()=>{
//     console.log('http://localhost:9999 服务器启动了');
    
// })

// const http = require('http');
// const server = http.createServer();
// server.on('request',(req,res)=>{
//     res.writeHead(404,'dsf',{'content-type':'text/css'});
//     res.end('hhh');
// });
// server.listen(9999,()=>{
//     console.log('http://localhost:9999 服务器启动了');
    
// })
const http = require('http');
const server = http.createServer();
server.on('request',(req,res)=>{
    res.writeHead(200,'ok',{'content-type':'text/css'});
    res.end('ok')
});
server.listen(9999,()=>{
    console.log('http://localhost:9999 服务器启动了');
    
})

