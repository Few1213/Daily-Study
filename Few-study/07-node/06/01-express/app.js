//1-引入express 模块 
const express = require('express');

const app = express(); //创建服务器

// 处理路由处理请求 

// app.get('/index', (req, res) => {

//     res.send('响应完成'); 
// });

app.use('/list', (req, res) => {
    console.log(req.url);
    res.send('use - 监听请求 /list'); 
});

app.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));