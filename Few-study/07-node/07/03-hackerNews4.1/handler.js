const path = require('path');
const db = require('./db'); 

//处理各种请求细节的代码
// 代码即注释 
module.exports = {
    showIndex(req, res) {
        //1-读取数据库的全部数据
        //2-将数据和模板进行绑定，生成结构 
        // condb(news => {
        //     news.find().toArray((err, data) => {
        //         if (err) {
        //             return console.log('读取失败', err);                
        //         }
        //         res.render('index.html', { list: data });
        //     });
        // })
        db.getAllnews(data => {
            //渲染 
            res.render('index.html', { list: data });
        })
    },
    showDetails(req, res) {
        // 获取id 
        // 根据id找到对应的数据，
        // 配合模版引擎进行渲染
        let id = req.query.id; //获取id 
        // condb(news => {
        //     // 根据id找到对应的数据，
        //     // new ObjectID(id) 将字符串形式id 转成 ObjectID
        //     news.find({ _id : new ObjectID(id) }).toArray((err, data) => {
        //         if (err) {
        //             return console.log('查找失败',err);                
        //         }
        //         // console.log(data);      
        //         //绑定数据和模版
        //         res.render('details.html', data[0]);
        //     });
        // })
        db.getNewById(id, data => {
            //渲染查找到数据
            res.render('details.html', data[0]);
        })
    },
    showSubmit(req, res) {
        //纯静态页面，直接返回即可
        res.sendFile(path.join(__dirname, 'pages', 'submit.html'));
    },
    postAdd(req, res) {
        // 1-获取前端表单的数据 
        // 2-将数据插入到数据库中
        // 3-跳转到首页
        let info = req.body;  //1-获取前端表单的数据 
        // condb(news => {
        //     news.insert(info);  //2-将数据插入到数据库中
        //     res.redirect('/');  // 3-跳转到首页
        // })
        db.insertNew(info, () => {
            //重定向 
            res.redirect('/');//跳转到首页
        })
    }
};


