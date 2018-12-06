// 外置路由模块也需要引入 express 框架
const express = require('express');
const fs = require('fs');
const path = require('path');

// 得到一个外置路由实例
const router = express.Router();

// 首页
router.get('/index', (req, res) => {
    // 需要模板引擎渲染
    readData(data => {
        res.render('index.html', data);
    })
});

router.get('/', (req, res) => {
    res.redirect('/index');
})

// 详情页
router.get('/details', (req, res) => {
    // 获取 id 查找数据
    console.log(req.query);
    let id = req.query.id;
    readData(data => {
        data = data.list.find(v => v.id == id);
        // 渲染
        res.render('details.html', data);
    })
})

// 提交页面
router.get('/submit', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'submit.html'));
})

router.post('/add', (req, res) => {
    let info = req.body;
    readData(data => {
        info.id = data.list[data.list.length - 1].id + 1;
        // data = JSON.parse(data,)
        data.list.push(info);
        data = JSON.stringify(data,null,2);
        fs.writeFile(path.join(__dirname,'data','data.json'),data,(err)=>{
            if (err) {
                return console.log('写入失败',err);
            }
            res.redirect('/');
        })
    })
})

// 导出路由实例
module.exports = router;



// 读取数据的封装函数
function readData(callback) {
    fs.readFile(path.join(__dirname, 'data', 'data.json'), (err, data) => {
        if (err) {
            return console.log('读取失败', err);
        }
        // 在这里将数据转换为 js 对象
        data = JSON.parse(data);
        callback && callback(data);
    })
}