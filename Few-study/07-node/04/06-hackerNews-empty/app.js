// 引入需要的模块
const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const template = require('art-template');
const url = require('url');

// 创建一个服务器
const server = http.createServer();

// 监听服务器的请求
server.on('request', (req, res) => {
    // console.log(req.url); 
    // console.log(req.method);
    res.setHeader('content-type', 'text/html;charset=utf-8');

    // 首页
    if (req.url.startsWith('/index') || req.url == '/') {
        // 先读取数据库中的数据,再读取模板
        // 将数据和模板进行绑定,生成结构
        // 返回给浏览器

        // fs.readFile(path.join(__dirname, 'views', 'index.html'), (err, data) => {
        //     if (err) {
        //         return console.log('读取错误', err);
        //     }
        //     // console.log(data);
        //     res.end(data);
        // })
        // 读取数据
        fs.readFile(path.join(__dirname,'data','data.json'),'utf-8',(err,data)=>{
            if (err) {
                return console.log('读取数据',err);
            }
            // console.log(data);
            // 现在读取到的 data 数据是一个字符串 ,需要将 json 数据转换为对象
            data = JSON.parse(data);
            // console.log(data);
            let str = template(path.join(__dirname,'views','index.html'),data);
            res.end(str)
            
        })
    } 
    else if (req.url.startsWith('/details')) {
        // 获取前端传递过来的 id
        // 获取全部数据
        // 根据 id 获取指定数据
        // 渲染页面

        // 在这里要引入 url 模块,使用 url.parse() 这个方法获取 id
        // 设置为 true 则生成一个对象
        // console.log(url.parse(req.url,true).query.id);
        let id = 
        

        res.end('ok');
        // fs.readFile(path.join(__dirname, 'views', 'details.html'), (err, data) => {
        //     if (err) {
        //         return console.log('读取错误', err);
        //     }
        //     // console.log(data);
        //     res.end(data);
        // })
    } 
    else if (req.url.startsWith('/submit')) {
        fs.readFile(path.join(__dirname, 'views', 'submit.html'), (err, data) => {
            if (err) {
                return console.log('读取错误', err);
            }
            // console.log(data);
            res.end(data);
        })
    } 
    else if (req.url.startsWith('/assets')) {
        fs.readFile(path.join(__dirname, req.url), (err, data) => {
            if (err) {
                return console.log('读取错误', err);
            }
            // console.log(data);
            res.setHeader('content-type',mime.getType(req.url));
            res.end(data);
        })
    } 
    else {
        res.end('404 Not Found');
    }

});

// 设置端口 开启服务器
server.listen(9999, () => {
    console.log('http://localhost:9999 服务器开启了');
});