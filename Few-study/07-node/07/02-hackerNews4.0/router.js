const express = require('express');
const mongodb = require('mongodb');
const path = require('path');

const ObjectID = mongodb.ObjectID;



//得到一个外置路由对象  
const router = express.Router(); 

//得到一个mongodb的客户端 
const mongodbClient = mongodb.MongoClient; 
//连接数据库字符串 
const host = 'mongodb://127.0.0.1:27017';


//将路由绑定给router
router.get('/', (req, res) => { //首页
    //1-读取数据库的全部数据
    //2-将数据和模板进行绑定，生成结构
    // mongodbClient.connect(host, (err, client) => {
    //     if (err) {
    //         return console.log('连接失败', err);            
    //     }
    //     //选择要操作的数据库 中的 集合 
    //     let news = client.db('hackerNews').collection('news');

    //     //操作
    //     news.find().toArray((err, data) => {
    //         if (err) {
    //             console.log('读取失败', err);                
    //         }
    //         console.log(data); //数据库的数据 数组 
    //         //配合模版引擎进行渲染 
    //         res.render('index.html', {list: data});
    //     });
    //     // 关闭数据库
    //     client.close();
    // })

    condb(news => {
        news.find().toArray((err, data) => {
            if (err) {
                return console.log('读取失败', err);                
            }
            res.render('index.html', { list: data });
        });
    })
});

router.get('/index', (req, res) => { //首页
    res.redirect('/');
})

router.get('/details', (req, res) => { //详情页
    // 获取id 
    // 根据id找到对应的数据，
    // 配合模版引擎进行渲染
    let id = req.query.id; //获取id 
    condb(news => {
        // 根据id找到对应的数据，
        // new ObjectID(id) 将字符串形式id 转成 ObjectID
        news.find({ _id : new ObjectID(id) }).toArray((err, data) => {
            if (err) {
                return console.log('查找失败',err);                
            }
            // console.log(data);      
            //绑定数据和模版
            res.render('details.html', data[0]);
        });
    })
})

router.get('/submit', (req, res) => { //提交页面
    //纯静态页面，直接返回即可
    res.sendFile(path.join(__dirname, 'pages', 'submit.html'));
})

router.post('/add', (req, res) => {   //post方式 添加  
    // 1-获取前端表单的数据 
    // 2-将数据插入到数据库中
    // 3-跳转到首页
    let info = req.body;  //1-获取前端表单的数据 
    condb(news => {
        news.insert(info);  //2-将数据插入到数据库中
        res.redirect('/');  // 3-跳转到首页
    })
})



//导入router

module.exports = router; 


//封装连接数据库的方法 
function condb(callback) {
    mongodbClient.connect(host, (err, client) => {
        if (err) {
            return console.log('连接失败', err);            
        }
        //选择要操作的数据库 中的 集合 
        let news = client.db('hackerNews').collection('news');

        //操作
        callback && callback(news);
        // 关闭数据库
        client.close();
    })
}