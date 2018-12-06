const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

const app = express();

// 配置模板引擎
app.engine('html',require('express-art-template'));
app.set('views','pages');

// 设置静态资源
app.use('/assets',express.static('assets'));
// app.use((req,res)=>{
//     res.send('ok');
// })

// 设置 body-parser 
app.use(bodyParser.urlencoded());

//1 设置一个路由模块,在里面进行各页面的请求处理
app.use(router);

app.listen(9999,()=>{
    console.log('http://localhost:9999 服务器开启了');
})