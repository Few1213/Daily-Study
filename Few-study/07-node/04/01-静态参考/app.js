// 1- 根据不同的请求，返回对应的静态页面 

const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

const server = http.createServer(); //创建服务器

server.on('request', (req, res) => { //处理请求
    // 根据不同的请求，返回对应的静态页面 
    console.log(req.url);

    if (req.url.startsWith('/index') || req.url == '/') { //首页
        fs.readFile(path.join(__dirname, 'views', 'index.html'), (err, data) => {
            if (err) {
                return console.log('读取失败', err);
            }
            res.end(data); //返回数据给浏览器进行解析
        });
    } else if (req.url.startsWith('/details') ) { // 详情页
        fs.readFile(path.join(__dirname, 'views', 'details.html'), (err, data) => {
            if (err) {
                return console.log('读取失败', err);
            }
            res.end(data);
        })
    } else if (req.url.startsWith('/submit') ) {  // 提交页
        fs.readFile(path.join(__dirname, 'views', 'submit.html'), (err, data) => {
            if (err) {
                return console.log('读取失败', err);
            }
            res.end(data);
        })
    } else if (req.url.startsWith('/assets')) { //处理静态资源 
        // 读取文件返回
        fs.readFile(path.join(__dirname, req.url), (err, data) => {
            if (err) {
               return console.log('读取失败', err);                
            }
            // 给每个文件设置明确的mime类型 
            res.setHeader('content-type', mime.getType(req.url));
            res.end(data); //返回读取的文件 
        })
    } else { //404
        // res.statusCode = 404;
        res.writeHead(404, {'content-type': 'text/html;charset=utf-8'});
        res.end('404-页面未找到！');
    }

});

server.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));

