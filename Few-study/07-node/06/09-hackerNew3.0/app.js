const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

//创建服务器
const app = express();

// 配置模版引擎 
app.engine('html', require('express-art-template'));
// 配置模版路径  
app.set('views', 'pages');

//配置静态资源托管 
app.use('/assets', express.static('assets'));

//给req.body赋值 
app.use(bodyParser.urlencoded());

app.use((req, res, next) => {
    console.log(req.url);
    next();    
})

//处理请求  
app.use(router);


//开启服务器
app.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));