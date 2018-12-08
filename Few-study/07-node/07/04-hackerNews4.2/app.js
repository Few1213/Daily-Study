// 跟据前端请求，返回对应页面（页面数据是基于数据库动态渲染的）
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

const app = express(); //创建服务器 

// 配置模版引擎 
app.engine('html', require('express-art-template'));
// 设置模版的默认路径
app.set('views', 'pages');

//配置静态托管
app.use('/assets', express.static('assets'));

//给body赋值  
app.use(bodyParser.urlencoded());

app.use((req, res, next) => {
    console.log(req.url);
    next();    
})

//监听并处理请求
app.use(router);

//开启服务器
app.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));



