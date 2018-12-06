//1-引入express 模块 
const express = require('express');
const url = require('url');
const querystring = require('querystring');

const app = express(); //创建服务器

// 使用中间件 

app.use((req, res, next) => {
    //给req 拓展query1属性 
    req.query1 = url.parse(req.url, true).query;
    next();
});

app.use((req, res, next) => {
    //给req拓展body1属性 
    let r = '';
    req.on('data', (chunk) => {
        r += chunk;
    })

    req.on('end', () => {
        req.body1 = querystring.parse(r);
        next();
    })

    // next();
})


app.use((req, res) => {
    res.send('你好');
    console.log(req.query1);
    console.log(req.body1);   
    
});

app.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));