//1-引入express 模块 
const express = require('express');
const router = require('./router');

const app = express(); //创建服务器

//处理路由： 分配任务，根据不同的请求返回不同的响应 
router(app);

app.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));