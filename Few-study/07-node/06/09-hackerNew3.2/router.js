// 在路由模块里同样需要引入 express
const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// 首页
router.get('/index', (req, res) => {
    readData(data => {
        res.render('index.html', data);
    });
})

router.get('/', (req, res) => {
    res.redirect('/index');
})

// 详情页
router.get('/details', (req, res) => {
    readData(data => {
        let id = req.query.id;
        data = data.list.find(v => v.id == id);
        res.render('details.html', data);
    })
})

// 提交页
router.get('/submit', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'submit.html'));
})

// 处理 post 请求
router.post('/add', (req, res) => {
    // 需要 res.body 和第三方中间件
    let info = req.body;
    readData(data => {
        info.id = data.list[data.list.length - 1].id + 1;
        data.list.push(info);
        data = JSON.stringify(data, null, 2);
        fs.writeFile(path.join(__dirname, 'data', 'data.json'), data, (err) => {
            if (err) {
                return console.log('写入失败', err);
            }
            res.redirect('/');
        })
    })
})

// 暴露出 router
module.exports = router;

// 封装一个读取数据的函数
function readData(callback) {
    fs.readFile(path.join(__dirname, 'data', 'data.json'), (err, data) => {
        if (err) {
            return console.log('读取失败', err);
        }
        // 将读取到的数据转换为对象
        data = JSON.parse(data);
        callback && callback(data);
    })
}