// 引入需要的模块
const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const template = require('art-template');
const url = require('url');
const queryString = require('querystring');

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
        // fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
        //     if (err) {
        //         return console.log('读取数据', err);
        //     }
        //     // console.log(data);
        //     // 现在读取到的 data 数据是一个字符串 ,需要将 json 数据转换为对象
        //     data = JSON.parse(data);
        //     // console.log(data);
        //     let str = template(path.join(__dirname, 'views', 'index.html'), data);
        //     res.end(str);

        // })
        readData(data => {
            let str = template(path.join(__dirname, 'views', 'index.html'), data);
            res.end(str);
        })
    } else if (req.url.startsWith('/details')) {
        // 获取前端传递过来的 id
        // 获取全部数据
        // 根据 id 获取指定数据
        // 渲染页面

        // 在这里要引入 url 模块,使用 url.parse() 这个方法获取 id
        // 设置为 true 则生成一个对象
        // console.log(url.parse(req.url,true).query.id);
        let id = url.parse(req.url, true).query.id;
        // fs.readFile(path.join(__dirname, 'data', 'data.json'), (err, data) => {
        //     if (err) {
        //         return console.log('读取失败', err);
        //     }
        //     data = JSON.parse(data);
        //     // console.log(data);
        //     // find 函数返回查找到的第一个数据
        //     data = data.list.find(v => v.id = id);
        //     // console.log(data);
        //     let str = template(path.join(__dirname, 'views', 'details.html'), data);
        //     res.end(str);
        // })
        readData(data => {
            data = data.list.find(v => v.id = id);
            // console.log(data);
            let str = template(path.join(__dirname, 'views', 'details.html'), data);
            res.end(str);
        })
        // res.end('ok');
        // fs.readFile(path.join(__dirname, 'views', 'details.html'), (err, data) => {
        //     if (err) {
        //         return console.log('读取错误', err);
        //     }
        //     // console.log(data);
        //     res.end(data);
        // })
    } else if (req.url.startsWith('/submit')) {
        fs.readFile(path.join(__dirname, 'views', 'submit.html'), (err, data) => {
            if (err) {
                return console.log('读取错误', err);
            }
            // console.log(data);
            res.end(data);
        })
    } else if (req.url.startsWith('/assets')) {
        fs.readFile(path.join(__dirname, req.url), (err, data) => {
            if (err) {
                return console.log('读取错误', err);
            }
            // console.log(data);
            res.setHeader('content-type', mime.getType(req.url));
            res.end(data);
        })
    } else if (req.url.startsWith('/add') && req.method == 'GET') {
        // 如果是 get 请求
        // 获取前端表单提交的数据
        // 读取全部的数据,转换成 js 对象
        // 将新添加的数据,追加到数组中
        // 将数组转换成 json 字符串,写到 data.json 中
        // 跳转到列表页,看到添加效果

        // console.log(url.parse(req.url,true).query);
        let info = url.parse(req.url, true).query; // 获取的是一个对象
        // console.log(info);
        // 读取全部的数据
        // fs.readFile(path.join(__dirname, 'data', 'data.json'), (err, data) => {
        //     if (err) {
        //         return console.log('读取失败', err);
        //     }
        //     data = JSON.parse(data);
        //     // console.log(data);
        //     // 获取 data 对象的最后一个数据的 id ,将表单提交的数据添加到数组最后
        //     info.id = data.list[data.list.length - 1].id + 1;
        //     // console.log(info);
        //     // 添加到 data 中
        //     data.list.push(info);
        //     // 将数据转为 json 格式
        //     data = JSON.stringify(data, null, 2);
        //     // console.log(data);
        //     // 重新写入数据
        //     fs.writeFile(path.join(__dirname, 'data', 'data.json'), data, 'utf-8', (err) => {
        //         if (err) {
        //             return console.log('读取失败', err);
        //         }
        //         // 跳转到列表页,看到添加的效果
        //         // 根据状态码 302 流浪器会去 location 属性
        //         // 302 重定向
        //         res.statusCode = 302;
        //         res.setHeader('localtion', '/index');
        //         res.end();
        //     })
        // })
        readData(data => {
            info.id = data.list[data.list.length - 1].id + 1;
            // console.log(info);
            // 添加到 data 中
            data.list.push(info);
            // 将数据转为 json 格式
            data = JSON.stringify(data, null, 2);
            writeData(data, () => {
                res.statusCode = 302;
                res.setHeader('localtion', '/index');
                res.end();
            })
        })
        // res.end('ok');

    } else if (req.url.startsWith('/add') && req.method == 'POST') {
        // post 请求获取数据
        // 得到全部的数据
        // 添加数据,写入数据
        // 只要前端以 post 向后台提交数据,都会触发 data 事件,并且 data 事件可能触发多次
        // 如果浏览器传递数据完毕,就会触发 end 事件,在 end 事件中使用接收的数据
        // 前端传递给后台得是字符串
        let info = '';
        req.on('data', (chunk) => {
            info += chunk;
        })
        req.on('end', () => {
            // 这里已经得到数据了
            // console.log(info); // title=12&url=1&text=2 得到的是这么一个字符串
            // 将得到的数据转换为对象 运用 querystring 模块
            info = queryString.parse(info);
            // 读取原数据中的全部数据
            // fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
            //     if (err) {
            //         return console.log('读取失败', err);
            //     }
            //     // 将 data 数据转为js 对象
            //     data = JSON.parse(data);
            //     info.id = data.list[data.list.length - 1].id + 1;
            //     data.list.push(info);
            //     //转换成json 格式重新写入
            //     data = JSON.stringify(data, null, 2);
            //     fs.writeFile(path.join(__dirname, 'data', 'data.json'), data, (err) => {
            //         if (err) {
            //             return console.log('写入失败', err);
            //         }
            //         // 重定向
            //         res.statusCode = 302;
            //         res.setHeader('location', '/index');
            //         res.end();
            //     })

            // })
            readData(data => {
                info.id = data.list[data.list.length - 1].id + 1; // 设置id 
                data.list.push(info); //添加数据到数组
                data = JSON.stringify(data, null, 2); //转成js格式 
                // 写入到文件
                writeData(data, () => {
                    //跳转到首页 
                    res.statusCode = 302;
                    res.setHeader('location', '/index');
                    res.end();
                })
            })

        })

    } else {
        res.end('404 Not Found');
    }

});

// 设置端口 开启服务器
server.listen(9999, () => {
    console.log('http://localhost:9999 服务器开启了');
});

function readData(callback) {
    fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
        if (err) {
            return console.log('读取失败', err);
        }
        // 将 data 数据转为js 对象
        data = JSON.parse(data);
        callback && callback(data);
    })
}

function writeData(data, callback) {
    fs.writeFile(path.join(__dirname, 'data', 'data.json'), data, (err) => {
        if (err) {
            return console.log('写入失败', err);
        }
    })
    callback && callback();
}