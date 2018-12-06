// 中间件
//  可以接收上一个中间件处理结果，并且将自己处理结果传递给下一个中间件
//  express 中间件就是一个函数， 作用 给res, req 拓展功能  

const express = require('express');

const app = express();

// 使用中间件来给res, req拓展新功能 
app.use( (req, res, next) => {
    req.aa = 'aa';
    // res.send('use-处理请求'); 1- 终止请求 
    next(); 
    // 如果两个都不写， 会是请求悬挂在此 
});

// 中间件
app.use((req, res, next) => {
    req.say = function () {
        console.log('萨瓦迪卡');        
    }
    res.bb = 200;

    next(); //将本次中间件处理结果交给下一个中间件去使用 
})

app.use((req, res, next) => {
    res.hello = function () {
        console.log('hello world');        
    }
    // res.send();
    next();
})

// 处理请求 
app.get('/index', (req, res) => {
    res.send('你访问了首页');
    console.log(req.aa);    
    console.log(res.bb);
    req.say();
    res.hello();
    
});

//extend.js

app.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));