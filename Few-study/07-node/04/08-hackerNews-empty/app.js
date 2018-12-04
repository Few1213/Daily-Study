const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const template = require('art-template');
const url = require('url');
const queryString = require('querystring');
const server = http.createServer();
server.on('request', (req, res) => {
    if (req.url.startsWith('/index') || req.url == '/') {
        fs.readFile(path.join(__dirname, 'data', 'data.json'), (err, data) => {
            if (err) {
                return console.log('读取失败', err);
            }
            data = JSON.parse(data);
            let str = template(path.join(__dirname, 'views', 'index.html'), data);

            res.end(str);
        });
    } else if (req.url.startsWith('/details')) {
        let id = url.parse(req.url, true).query.id;
        fs.readFile(path.join(__dirname, 'data', 'data.json'), (err, data) => {
            if (err) {
                return console.log('读取失败', err);
            }
            data = JSON.parse(data);
            data = data.list.find(v => v.id = id);
            let str = template(path.join(__dirname, 'views', 'details.html'), data);
            res.end(str);
        });

        // console.log(id);

        // res.end('ok');
    } else if (req.url.startsWith('/submit')) {
        fs.readFile(path.join(__dirname, 'views', 'submit.html'), (err, data) => {
            if (err) {
                return console.log('读取失败', err);
            }
            res.end(data);
        })
    } else if (req.url.startsWith('/assets')) {
        fs.readFile(path.join(__dirname, req.url), (err, data) => {
            if (err) {
                 return console.log('读取失败', err);
            }
            res.setHeader('content-type', mime.getType(req.url));
            res.end(data);
        });
    } else if (req.url.startsWith('/add') && req.method == "GET") {
        let info = url.parse(req.url,true).query;
        fs.readFile(path.join(__dirname, 'data', 'data.json'), (err, data) => {
            if (err) {
                console.log('读取失败', err);
            }
            data = JSON.parse(data);
            info.id = data.list[data.list.length - 1].id + 1;
            data.list.push(info);
            data = JSON.stringify(data,null,2);
            fs.writeFile(path.join(__dirname,'data','data.json'),data,(err)=>{
                if (err) {
                    return console.log('读取失败', err);
               }
               // 重定向
               res.statusCode = 302;
               res.setHeader('location','/index');
               res.end();
            })
        });

    } else if (req.url.startsWith('/add') && req.method == "POST") {
        // 获取从前端传递过来的数据
        let info = '';
        req.on('data', (chunk) => {
            info += chunk;
        })
        req.on('end', () => {
            info = queryString.parse(info);
            fs.readFile(path.join(__dirname, 'data', 'data.json'), (err, data) => {
                if (err) {
                    console.log('读取失败', err);
                }
                data = JSON.parse(data);
                info.id = data.list[data.list.length - 1].id + 1;
                data.list.push(info);
                data = JSON.stringify(data,null,2);
                fs.writeFile(path.join(__dirname,'data','data.json'),data,(err)=>{
                    if (err) {
                        return console.log('读取失败', err);
                   }
                   // 重定向
                   res.statusCode = 302;
                   res.setHeader('location','/index');
                   res.end();
                })
            });

        })

    } else {
        res.end('404');
    }




    // fs.readFile(path.join(__dirname, 'pages', req.url), (err, data) => {
    //     if (err) {
    //         console.log('读取失败', err);
    //     }
    //     res.setHeader('content-type', mime.getType(req.url));
    //     res.end(data);
    // });
});
server.listen(9999, () => {
    console.log('http://localhost:9999/index.html 服务器启动了');
});