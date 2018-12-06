//1-引入express 模块 
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express(); //创建服务器

app.get('/index', (req, res) => {
    // fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     res.end(data);
    // })

    res.sendFile(path.join(__dirname, 'index.html'));

});

app.get('/', (req, res) => {
    console.log(req.url);
    // 304 文档未修改
    // 302 页面重定向 
    //跳转到首页 
    // res.status(302);
    // res.set('location', '/index');
    // res.send();
    res.redirect('/index');
});

app.use((req, res) => {
    // req.url
    // req.method
    // req.query
    // req.body

    // nodejs res 
    // res.statusCode = 200
    // res.statusMessage = 'aa;
    // res.setHeader(k, v);
    // res.writeHead(200, 'aaa', {k, v } )
    // res.write(字符串);
    // res.end(字符串 );

    // express res 
    // res.status(200);  状态码
    // res.set(k, v);    响应头
    // res.send();       发送请求主体 
    // res.sendFile();   发送文件给前端
    // res.redirect()    重定向

    res.status(404);
    // res.set('content-type', 'text/css');
    // 设置响应头
    res.set({
        aa: 'bb',
        cc: 'dd',
        'content-type': 'text/css'
    })

    // res.setHeader('content-type', 'text/html;charset=utf-8');
    // res.end();
    res.send('ok');
    
});

app.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));