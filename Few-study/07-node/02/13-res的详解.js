// // 1-引入http模块
// const http = require('http');

// // 2-创建http服务器
// const server = http.createServer(); 

// // 3-监听请求，处理请求
// server.on('request', (req, res) => {

//     // req 请求报文对象  用于获取请求报文数据
//     // res 响应报文对象  设置响应报文数据 

//     // 请求报文req的属性
//     // req.url  请求地址
//     // req.method 请求方式 
//     // req.headers

//     //通过res 设置 响应报文 
//     // 状态码 状态文本 
//     res.statusCode = 404;
//     // res.statusMessage = 'aaa';
//     // 状态文本不能使用中文， 状态文本一般不需要设置， 会根据状态码 自动设置；
//     res.statusMessage = '未找到页面';
//     // 响应头 
//     //header()
//     res.setHeader('content-type', 'text/html;charset=utf-8');
//     // 响应主体 
//     //echo '嘿嘿嘿';
//     res.write('嘿嘿嘿');

//     res.end('ok'); //告诉浏览器响应结束的 
// });

// // 4-设置端口 打开服务器 
// server.listen(9999, () => {
//     console.log('http://localhost:9999 服务器已启动');    
// });

//  引入 http 模块
// const http = require('http');
// const server = http.createServer();
// server.on('request',function (req, res) { 
//     res.statusCode = 200 ;
//     res.statusMessage = "hhh";
//     res.setHeader('content-type','text/html;charset=utf-8');
//     res.write('2222');
//     res.end('ok');
//  });
// server.listen(9999,function () { 
//     console.log('http://localhost:9999 服务器开启了');   
//  })

// const http = require('http');
// const server = http.createServer();
// server.on('request',function (req,res) { 
//     res.statusCode = 200;
//     // res.statusMessage = "11";
//     res.statusMessage="ok";
//     res.setHeader('content-type','text/html;charset=utf-8');
//     res.write('111');
//     res.end('2222');
//  });
// server.listen(9999,function () { 
//     console.log('http://localhost:9999 服务器开启了');     
//  })
 
const http = require('http');
const server = http.createServer();
server.on('request',function (req,res) { 
    res.statusCode = 200;
    res.statusMessage = "ok";
    res.setHeader('content-type','text/html;charset=utf-8');
    res.write('1');
    res.end('2');
 });
server.listen(9999,function () { 
    console.log('http://localhost:9999 服务器开启了');
    
 })