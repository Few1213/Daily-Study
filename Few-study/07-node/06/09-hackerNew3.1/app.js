// 引入模块
const express = require('express');
// 引入外置路由模块
const router = require('./router');
const bodyParser = require('body-parser');

// 创建服务器
const app = express();

// 配置模板引擎
app.engine('html',require('express-art-template'));
app.set('views','pages');

// 处理静态资源,静态资源托管
app.use('/assets',express.static('assets'));

//给 req.body 赋值
app.use(bodyParser.urlencoded());

// 处理请求
app.use(router);

// 开启服务器
app.listen(9999,()=>{
    console.log('http://localhost:9999 服务器开启了');  
})