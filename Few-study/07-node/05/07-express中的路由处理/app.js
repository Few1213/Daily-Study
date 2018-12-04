// 引入express
const express = require('express');

// 1-创建服务器 
const app = express();  


// 2-处理请求（路由处理）
// app.get('/index', (req, res) => {
//     res.send('首页');
//  })
// app.get('/list', (req, res) => { 
//     res.send('列表页');
// })
// app.get('/login', (req, res) => {
//     res.send('登录页');
// })
 

// app.post('/index', (req, res) => {
//     console.log(req.method);
//     console.log(req.url);
//     console.log('post请求方式');    
    
    
//     res.send('post方式请求了index页面');
// })

//路由处理方式一：
// app.method  用特定特定请求方式监听特定请求url   app.get app.post 
//路由处理方式二：
// app.all();
// 可以用任意请求方式 来监听特定请求url地址

// 路由处理方式三：
// app.use();
// 可以用任意的请求方式，监听 以指定路径开头的请求  
// use()中路径可以省略， 默认值是 '/';


// app.all('/index', (req, res) => {
//     console.log(req.method);
//     console.log(req.url);
//     console.log('all监听请求');   
    
// })

// app.use('/index', (req, res) => {
//     console.log(req.method);
//     console.log(req.url);
//     console.log('use监听请求');  
//     res.send('ok'); 
// })

// 监听所有的请求（任何请求方式，任何路径）
app.use('/', (req, res) => {
    console.log(req.method);
    console.log(req.url);  
    res.send('ok');
    
})

// 3- 设置端口，启动服务器 
app.listen(9999, () => console.log('http://localhost:9999 服务器已启动')); 