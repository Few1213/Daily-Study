//1-引入express 模块 
const express = require('express');
const bodyParser = require('body-parser');

const app = express(); //创建服务器



// app.use(中间件函数);
// app.use((req, res, next) => { });
// 使用第三方中间件给 req.body进行赋值 
app.use(bodyParser.urlencoded());  // 给req.body 赋值了 ， next();


app.use((req, res) => {
    console.log(req.method);
    // req.body的默认值是undefined
    console.log(req.body);  
    res.send('use - 监听请求'); 
});



app.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));