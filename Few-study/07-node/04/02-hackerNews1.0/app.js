// 根据前端的请求，返回对应的页面的数据（数据动态渲染的）

// 引入模块
const http = require('http');
const fs = require('fs');
const path = require('path');
const template = require('art-template');
const mime = require('mime');
const url = require('url');
const queryString = require('querystring');

// 创建服务器 
const server = http.createServer(); 

// 监听请求 处理请求
server.on('request', (req, res) => {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    console.log(req.url);
    console.log(req.method);    
    if (req.url.startsWith('/index') || req.url == '/') { //首页
        // 1-先读取数据库中所有数据， 在读取模版，
        // 2-将数据和模板进行绑定，生成结构，
        // 3-返回给浏览器
        fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
            if (err) {
                return console.log('读取失败', err);
            }
           //将json数据转成js对象 
            data = JSON.parse(data);
            // console.log(data);
            // 将数据和模板进行绑定，生成结构，
            let str = template(path.join(__dirname, 'views', 'index.html'), data);
            // 返回给浏览器进行解析
            res.end(str);
        });       

    } else if (req.url.startsWith('/details')) { // 详情页面
        // 1-获取前端传递id
        // 2-获取书库的全部数据
        // 3-从数据库中获取指定id的数据
        // 4-通过id将查询的数据渲染到页面

        // 获取id
        let id = url.parse(req.url, true).query.id;
        console.log(id);
        // 读取data.json中所有数据，转成对象，在去找和id对应的数据 
        fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
            if (err) {
                return console.log('读取失败', err);                
            }
            //将json转成js对象
            data = JSON.parse(data);
            console.log(data);       
            // 根据id查找对应的数据，并渲染
            data = data.list.find(v => v.id == id);
            console.log(data); 
            // 将获取的数据渲染到页面中 
            let str = template(path.join(__dirname, 'views', 'details.html'), data);
            res.end(str); //返回给浏览器解析            
        })        
        // res.end('详情页');
    } else if (req.url.startsWith('/submit')) {  // 提交页面
        //此页面不需要动态渲染，读取内容直接返回即可 
        fs.readFile(path.join(__dirname, 'views', 'submit.html'), (err, data) => {
            if (err) {
                return console.log('读取失败', err);                
            }
            res.end(data); //直接将页面返回给浏览器进行解析
        })
        // res.end('提交页');
    } else if (req.url.startsWith('/assets')) {  //静态资源
        // 静态资源直接读取返回即可，还是设置mime类型 
        fs.readFile(path.join(__dirname, req.url), (err, data) => {
            if (err) {
                return console.log('读取失败', err);
            }
            // 给每个静态资源设置mime类型 
            res.setHeader('content-type', mime.getType(req.url));
            res.end(data); //将静态资源直接返回
        })
    } else if (req.url.startsWith('/add') && req.method == 'GET') { //get方式添加数据 
        console.log(url.parse(req.url, true).query);
        // 1- 获取前端表单提交的数据
        // 2- 读取全部data.json中数据，转成js数组
        // 3- 将新添加的数据 追加到数组中
        // 4- 将添加了数据数组转成json字符串， 写入到data.json中
        // 5- 跳转到列表页，看到添加效果

         // 1- 获取前端表单提交的数据
        let info = url.parse(req.url, true).query; 
        console.log(info);
        
        // 2- 读取全部data.json中数据，转成js数组
        fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
            if (err) {
                return console.log('读取失败', err);                
            }
            data = JSON.parse(data); //转成js对象 
            console.log(data);            
            // 给info设置id  用数组最后一个元素id + 1 
            info.id = data.list[data.list.length - 1].id + 1;
            console.log(info);
            // 将info的数据追加到数组中 
            data.list.push(info); 
            // 将data转成json字符串
            data = JSON.stringify(data, null, 2);
            // 将data写到data.json中 
            fs.writeFile(path.join(__dirname, 'data', 'data.json'), data, (err) => {
                if (err) {
                    return console.log('写入失败', err);                    
                } 
                // 跳转到列表页，看到添加效果
                // 服务器只能告诉, 浏览器你去跳转
                res.statusCode = 302; //浏览器根据状态码302  去location属性
                res.setHeader('location', '/index');
                res.end();
            })   
        })
        
        
        // res.end('get-add');
    } else if (req.url.startsWith('/add') && req.method == 'POST') { //post方式添加数据 
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
            // 获取数据库的全部数据 
            fs.readFile(path.join(__dirname, 'data', 'data.json'), 'utf-8', (err, data) => {
                if (err) {
                    return console.log('读取失败', err);                    
                }
                data = JSON.parse(data); //将json数据转js对象 
                info.id = data.list[data.list.length - 1].id + 1; //设置id 
                data.list.push(info); //将新数据添加到数组中 
                data = JSON.stringify(data, null, 2); //将数据转成json格式 
                // 将json字符串写入文件 
                fs.writeFile(path.join(__dirname, 'data', 'data.json'), data, (err) => {
                    if (err) {
                        return console.log('写入失败', err);                        
                    }

                    //跳转到首页
                    res.statusCode = 302;
                    res.setHeader('location', '/index');
                    res.end();
                })
            })
        })
    }else { //404 
        res.end('404');
    }
});

// 开启服务器
server.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));