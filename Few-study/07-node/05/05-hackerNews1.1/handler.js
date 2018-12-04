const template = require('art-template');
const mime = require('mime');
const queryString = require('querystring');
const fs = require('fs');
const path = require('path');

module.exports = {

    //渲染首页
    showIndex(req, res) {
         // 1-先读取数据库中所有数据， 在读取模版，
        // 2-将数据和模板进行绑定，生成结构，
        // 3-返回给浏览器    

        readData(data => {
            let str = template(path.join(__dirname, 'views', 'index.html'), data);
            // 返回给浏览器进行解析
            res.end(str);
        });

    },
    //渲染详情页
    showDetails(req, res) {
        // 1-获取前端传递id
        // 2-获取书库的全部数据
        // 3-从数据库中获取指定id的数据
        // 4-通过id将查询的数据渲染到页面

        // 获取id
        let id =res.query.id;
        // console.log(id);
        // 读取data.json中所有数据，转成对象，在去找和id对应的数据 

        //读取数据库的数据
        readData(data => {
            // 查找对应id的 数据 
            data = data.list.find(v => v.id == id);
            // 将获取的数据渲染到页面中 
            let str = template(path.join(__dirname, 'views', 'details.html'), data);
            res.end(str); //返回给浏览器解析   
        });
    },
    // 渲染提交页面 
    showSubmit(req, res) {
        //此页面不需要动态渲染，读取内容直接返回即可 
        fs.readFile(path.join(__dirname, 'views', 'submit.html'), (err, data) => {
            if (err) {
                return console.log('读取失败', err);                
            }
            res.end(data); //直接将页面返回给浏览器进行解析
        })
    },
    // 静态资源
    showStatic(req, res) {
        // 静态资源直接读取返回即可，还是设置mime类型 
        fs.readFile(path.join(__dirname, req.url), (err, data) => {
            if (err) {
                return console.log('读取失败', err);
            }
            // 给每个静态资源设置mime类型 
            res.setHeader('content-type', mime.getType(req.url));
            res.end(data); //将静态资源直接返回
        })
    },
    //get-add
    getAdd(req, res) {
         // 1- 获取前端表单提交的数据
        // 2- 读取全部data.json中数据，转成js数组
        // 3- 将新添加的数据 追加到数组中
        // 4- 将添加了数据数组转成json字符串， 写入到data.json中
        // 5- 跳转到列表页，看到添加效果

        // 1- 获取前端表单提交的数据
        let info = res.query; 
        console.log(info);

        //读取数据库的全部数据
        readData(data => {           
            info.id = data.list[data.list.length - 1].id + 1;  // 设置id 
            data.list.push(info); //添加数据到数组
            data = JSON.stringify(data, null, 2);  //转成js格式 
            // 写入到文件
            writeData(data, () => {
                //跳转到首页 
                res.redirect(); 
            })            
        })       
    },
    // post-add
    postAdd(req, res) {
        //获取数据去哪获取？ 
        //只要前端以post向后台提交数据，都会触发data事件，并且 data事件可能触发多次 ，将获取的数据拼接起来
        // 如果浏览器数据传递完毕,会触发end事件， 在end事件中使用接收的数据；
        let info = '';
        // let n = 1;
        req.on('data', (chunk) => {
            info += chunk;                   
        });

        req.on('end', () => {
            // 当前前端数据传递完毕后，再使用数据              
            //将接收的数据转成对象 
            // console.log(info);   
            info = queryString.parse(info); //新数据的对象          

            //读取数据库的全部数据
            readData(data => {           
                info.id = data.list[data.list.length - 1].id + 1;  // 设置id 
                data.list.push(info); //添加数据到数组
                data = JSON.stringify(data, null, 2);  //转成js格式 
                // 写入到文件
                writeData(data, () => {
                    //跳转到首页 
                    res.redirect(); 
                })            
            })
        })
    },
    // 404 
    notFound(req, res) {
        res.end('404');
    }
}


// 读取数据方法
function readData(callback) {
    fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
        if (err) {
            return console.log('读取失败', err);
        }
       //将json数据转成js对象 
        data = JSON.parse(data);

        //callback使用数据进行后续操作 
        callback && callback(data); 
    });       
}

// 写文件 
// data 要写入的数据
// callback 写文件完成后回调函数
function writeData(data, callback) {
    fs.writeFile(path.join(__dirname, 'data', 'data.json'), data, (err) => {
        if (err) {
            return console.log('写入失败', err);                    
        } 
        callback && callback(); //写文件完成后回调函数
    })   
}