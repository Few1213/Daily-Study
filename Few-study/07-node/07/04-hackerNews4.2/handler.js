const path = require('path');
const db = require('./db'); 

//处理各种请求细节的代码
// 代码即注释 
module.exports = {
    showIndex(req, res) {        
        db.getAllnews(data => {
            //渲染 
            // res.render('index.html', { list: data });
            data = JSON.stringify(data);
            res.send(data);
        })
    },
    showDetails(req, res) {
        // 获取id 
        // 根据id找到对应的数据，
        // 配合模版引擎进行渲染
        let id = req.query.id; //获取id 
      
        db.getNewById(id, data => {
            //渲染查找到数据
            // res.render('details.html', data[0]);
            // data = JSON.stringify(data); 
            // res.send(data);
            // res.json(data);  //将数据转成json字符串，并返回 
            res.jsonp(data); // 既能处理普通请求， 还能处理jsonp的请求  

            // echo json_encode(arr);
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
        db.insertNew(info, () => {
            //重定向 
            // res.redirect('/');//跳转到首页
            let info = {
                code: 200,
                msg: '添加成功'
            }

            info = JSON.stringify(info);
            res.send(info);
        })
    }
};


