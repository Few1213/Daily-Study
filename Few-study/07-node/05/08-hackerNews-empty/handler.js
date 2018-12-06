const fs = require('fs');
const path = require('path');
const mime = require('mime');
const template = require('art-template');
const url = require('url');
const queryString = require('querystring');
module.exports = {
    showIndex(req, res) {

        readData(data => {
            let str = template(path.join(__dirname, 'views', 'index.html'), data);
            res.end(str);
        })
    },
    showDetails(req, res) {
        let id = url.parse(req.url, true).query.id;
        readData(data => {
            data = data.list.find(v => v.id = id);
            // console.log(data);
            let str = template(path.join(__dirname, 'views', 'details.html'), data);
            res.end(str);
        })
    },
    showSubmit(req, res) {
        fs.readFile(path.join(__dirname, 'views', 'submit.html'), (err, data) => {
            if (err) {
                return console.log('读取错误', err);
            }
            // console.log(data);
            res.end(data);
        })
    },
    showAssets(req, res) {
        fs.readFile(path.join(__dirname, req.url), (err, data) => {
            if (err) {
                return console.log('读取错误', err);
            }
            // console.log(data);
            res.setHeader('content-type', mime.getType(req.url));
            res.end(data);
        })
    },
    getAdd(req, res) {
        let info = url.parse(req.url, true).query;
        readData(data => {
            info.id = data.list[data.list.length - 1].id + 1;
            // console.log(info);
            // 添加到 data 中
            data.list.push(info);
            // 将数据转为 json 格式
            data = JSON.stringify(data, null, 2);
            writeData(data, () => {
                res.statusCode = 302;
                res.setHeader('location', '/index');
                res.end();
            })
        })
    },
    postAdd(req, res) {
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
    },
    notFound(req,res){
        res.end('404 Not Found');
    }
}
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