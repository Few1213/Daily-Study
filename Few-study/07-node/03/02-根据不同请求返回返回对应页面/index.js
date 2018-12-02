// // 1-引入模块
// const http = require('http');
// const fs = require('fs'); 
// const path = require('path');

// // 2-创建服务器
// const server = http.createServer();
// // 3-监听请求，处理请求
// server.on('request', (req, res) => {
//     //根据不同的请求地址，返回对应的html页面
//     console.log(req.url);
//     // 设置响应头
//     res.setHeader('content-type', 'text/html;charset=utf-8');

//     if (req.url.startsWith('/index') || req.url == '/') {
//         //读取首页内容 ，并返回 
//         fs.readFile(path.join(__dirname, 'pages', 'index.html'), 'utf-8', (err, data) => {
//             if (err) {
//                 return console.log('读取失败', err);                
//             }
//             //直接读取网页内容 返回给浏览器解析
//             res.end(data);
//         } )
//     } else if (req.url.startsWith('/list')) {
//         fs.readFile(path.join(__dirname, 'pages', 'list.html'), 'utf-8', (err, data) => {
//             if (err) {
//                 return console.log('读取失败', err);                
//             }
//             res.end(data); //返回读取的html页面内容给浏览器解析 
//         })
//     } else if (req.url.startsWith('/login')) {
//         fs.readFile(path.join(__dirname, 'pages', 'login.html'), 'utf-8', (err, data) => {
//             if (err) {
//                 return console.log('读取失败', err);                
//             }
//             res.end(data); //返回读取的html页面内容给浏览器解析 
//         })
//     }else {
//         res.end('404-页面未找到!!!');
//     }

//     // res.end('ok');
// })
// // 4-设置端口，开启服务器
// server.listen(9999, () => console.log('http://localhost:9999 服务器已启动') );

// // 引入 http 模块
// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const server = http.createServer();

// server.on('request',(req,res)=>{
//     res.setHeader('content-type','text/html;charset=utf-8');
//     if (req.url.startsWith('/index') || req.url=='/') {
//         fs.readFile(path.join(__dirname,'pages','index.html'),(err,data)=>{
//             if (err) {
//                 console.log('读取失败',err);
//             }
//             res.end(data);
//         })
//     }
//     else if(req.url.startsWith('/list')){
//         fs.readFile(path.join(__dirname,'pages','list.html'),'utf-8',(err,data)=>{
//             if (err) {
//                 console.log('读取失败',err);
//             }
//             res.end(data);
//         })
//     }
//     else if(req.url.startsWith('/login')){
//         fs.readFile(path.join(__dirname,'pages','login.html'),(err,data)=>{
//             if (err) {
//                 console.log('读取失败',err);

//             }    
//             res.end(data);
//         })
//     }
//     else{
//         res.end('页面未找到');
//     }
// });
// server.listen(9999,()=>{
//     console.log('http://localhost:9999 服务器开启了');

// })

// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const server = http.createServer();

// server.on('request', (req, res) => {
//     res.setHeader('content-type', 'text/html;charset=utf-8');
//     if (req.url.startsWith('/index') || req.url == '/') {
//         fs.readFile(path.join(__dirname, 'pages', 'index.html'), (err, data) => {
//             if (err) {
//                 console.log('读取失败', err);
//             }
//             res.end(data);
//         })
//     } else if (req.url.startsWith('/list')) {
//         fs.readFile(path.join(__dirname, 'pages', 'list.html'), (err, data) => {
//             if (err) {
//                 console.log('读取失败',err);
                
//             }
//             res.end(data);
//         })
//     }
//     else if(req.url.startsWith('/login')){
//         fs.readFile(path.join(__dirname,'pages','login.html'),(err,data)=>{
//             if (err) {
//                 console.log('读取失败',err);
//             }
//             res.end(data);
//         })
//     }
//     else{
//         res.end('页面未找到');
//     }
// });
// server.listen(9999,()=>{
//     console.log('http://localhost:9999 服务器启动了');
// })

// 引入模块
const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer();

server.on('request',(req,res)=>{
    // 设置响应头
    res.setHeader('content-type','text/html;charset=utf-8');
    if (req.url.startsWith('/index') || req.url =='/') {
        fs.readFile(path.join(__dirname,'pages','index.html'),(err,data)=>{
            if (err) {
                return console.log('读取失败',err);
            }
            res.end(data);
        })
    }
    else if(req.url.startsWith('/list')){
        fs.readFile(path.join(__dirname,'pages','list.html'),(err,data)=>{
            if (err) {
                return console.log('读取失败',err);
            }
            res.end(data);
        })
    }
    else if(req.url.startsWith('/login')){
        fs.readFile(path.join(__dirname,'pages','login.html'),(err,data)=>{
            if (err) {
                return console.log('读取失败',err);
            }
            res.end(data);
        })
    }
    else{
        res.end('页面未找到');
    }
});
 server.listen(9999,()=>{
     console.log('http://localhost:9999 服务器启动了');
     
 })