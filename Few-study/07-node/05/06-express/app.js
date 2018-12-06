// // 创建一个服务器，处理请求 

// // 1-引入模块
// const express = require('express');

// // 2-创建服务器
// const app = express(); 

// // 3-监听并处理请求
// // app.on('request', (req, res) => {
// //     if (req.url.startsWith('/index') && req.method == 'GET') {
// //         //处理首页
// //     }
// // })
// // 路由处理
// app.get('/index', (req, res) => {
//     // res.setHeader('content-type', 'text/html;charset=utf-8');
//     // res.end('你访问了首页');

//     res.send('你访问了首页！！！');
//  });
// // app.get('/list', (req, res) => { });
// // app.get('/details', (req, res) => { });
// // app.get('/submit', (req, res) => { });


// // app.post('/index', (req, res) => {
    
// // })


// // 4-设置端口开启服务器
// app.listen(9999, () => { console.log('http://localhost:9999 服务器已启动') } );
const express = require('express');
const app = express();
app.get('/index',(req,res)=>{
    res.send('ok');
})
app.listen(9999,()=>{
    console.log('http://localhost:9999 服务器启动了');
    
})