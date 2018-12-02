// // 1-引入模块
// const http = require('http');
// // 2-创建服务器
// const server = http.createServer();
// // 3-监听请求处理请求
// server.on('request', (req, res) => {
//     console.log(req.url); //请求url地址

//     // 设置响应头（状态码 响应头要设置在 响应主体的前面 ）
//     res.setHeader('content-type', 'text/html;charset=utf-8');

//     //响应主体 
//     if (req.url.startsWith('/index')) {
//         res.end('你访问了首页');
//     } else if (req.url.startsWith('/list')) {
//         res.end('你访问了列表页');
//     } else if (req.url.startsWith('/login')) {
//         res.end('你访问了登录页');
//     } else {
//         res.end('404-页面走丢了！');
//     }



//     //处理逻辑
//     // res.end('ok');
// })
// // 4-设置端口，开启服务器
// server.listen(9999, () =>{ console.log('http://localhost:9999 服务器已启动') });

// // 引入模块
// const http = require('http');
// // 创建服务器
// const server = http.createServer();
// // 监听请求
// server.on('request',(req,res)=>{
//     res.setHeader('content-type','text/html;charset=utf-8')
//     if (req.url.startsWith('/index') || req.url=='/') {
//         res.end('首页');
//     }
//     else if(req.url.startsWith('/list')){
//         res.end('列表');
//     }
//     else if(req.url.startsWith('/login')){
//         res.end('登录');
//     }
//     else{
//         res.end('404 Not Found');
//     }
// });
// // 开启端口
// server.listen(9999,()=>{
//     console.log('http://localhost:9999 服务器启动了');   
// });

// const http = require('http');
// const server = http.createServer();
// server.on('request',(req,res)=>{
//     // 设置响应头
//     res.setHeader('content-type','text/html;charset=utf-8');
//     if (req.url.startsWith('/index') || req.url == '/') {
//         res.end('首页');
//     }
//     else if(req.url.startsWith('/list')){
//         res.end('列表');
//     }
//     else if(req.url.startsWith('/login')){
//         res.end('登录');
//     }
//     else{
//         res.end('404 Not Found');
//     }
// });
// server.listen(9999,()=>{
//     console.log('http://localhost:9999 服务器启动了');
// })

// 引入 http 模块
const http = require('http');
// 创建服务器
const server = http.createServer();
// 监听请求
server.on('request',(req,res)=>{
    // 设置响应头
    res.setHeader('content-type','text/html;charset=utf-8');
    if (req.url.startsWith('/index') || req.url == '/') {
        res.end('首页');
    }
    else if(req.url.startsWith('/list')){
        res.end('list')
    }
    else if(req.url.startsWith('/login')){
        res.end('login');
    }
    else{
        res.end('404 not found');
    }
});
server.listen(9999,()=>{
    console.log('http://localhost:9999 服务器启动了');
    
});