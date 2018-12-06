const express = require('express'); 
const fs = require('fs');
const path = require('path');

const router = express.Router(); //得到一个外置路由实例 

//首页 
router.get('/index', (req, res) => {
    // 1-读取数据库的全部数据 
    // 2-配合模版引擎 渲染，返回给浏览器解析
    readData(data => {
          //使用模版引擎进行渲染 
          res.render('index.html', data);
    })
});

//首页 
router.get('/', (req, res) => {
    //重定向/index
    res.redirect('/index');
});

// 详情页
router.get('/details', (req, res) => {
    //获取数据id,根据id获取对应的数据，将数据渲染在页面中
    let id = req.query.id;
    //读取数据
    readData(data => {
        data = data.list.find(v => v.id == id);
        //渲染
        res.render('details.html', data);
    });
});

// 提交页面
router.get('/submit', (req, res) => {
    //直接读取返回即可
    res.sendFile(path.join(__dirname, 'pages', 'submit.html'));
});

// post方式添加数据 
router.post('/add', (req, res) => {
    //1-获取表单数据
    //2-读取data.json中数据，转成对象
    //3-将新数据添加到数组中
    //4-将数据转成json字符串，写入到文件
    //5-添加完成后跳转到首页
    console.log(req.body);
    let info = req.body;
    readData(data => {
        info.id = data.list[data.list.length - 1].id + 1; //设置id
        data.list.push(info); //追加
        data = JSON.stringify(data, null, 2); //转json格式 
        fs.writeFile(path.join(__dirname, 'data', 'data.json'), data, (err) => {
            if (err) {
                return console.log('写入失败', err);
            }
            //跳转到首页 
            res.redirect('/');
        })
    });
    

});


//导出路由实例
module.exports = router; 

// 读取数据的功能
function readData(callback) {
     // 1-读取数据库的全部数据 
     fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
        if (err) {
            return console.log('读取失败', err);
        }
        data = JSON.parse(data); //js对象
        callback && callback(data); //处理读取的数据
    })
}