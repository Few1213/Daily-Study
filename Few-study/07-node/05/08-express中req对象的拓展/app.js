const express = require('express');

// 引入给req.body赋值的模块
var bodyParser = require('body-parser');


//创建服务器 
const app = express(); 

// 给req.body赋值 
app.use(bodyParser.urlencoded({ extended: true }));

// 监听并处理请求 
app.use((req, res) => {
    
    // req对象
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    // req.query  = url.parse(req.url, true).query;  //get方式提交数据
    // req.body   //post方式 提交的数据  
    // req.on('data', (chunk)=> {
    //  data += chunk
    // })

    // req.on('end', ()=> {
    //   req.body = querystring.parse(data);
    // })

    // console.log(req.query);

    console.log(req.body);
    
    

    res.send('你好！'); 
});

//设置端口 
app.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));