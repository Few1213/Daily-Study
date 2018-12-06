const handler = require('./handler');

module.exports = function (req,res) {
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
        hangdler.showIndex(req,res);
    } else if (req.url.startsWith('/details')) {
        // 获取前端传递过来的 id
        // 获取全部数据
        // 根据 id 获取指定数据
        // 渲染页面

        // 在这里要引入 url 模块,使用 url.parse() 这个方法获取 id
        // 设置为 true 则生成一个对象
        // console.log(url.parse(req.url,true).query.id);
        
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
       
        // res.end('ok');
        // fs.readFile(path.join(__dirname, 'views', 'details.html'), (err, data) => {
        //     if (err) {
        //         return console.log('读取错误', err);
        //     }
        //     // console.log(data);
        //     res.end(data);
        // })
    } else if (req.url.startsWith('/submit')) {
        
    } else if (req.url.startsWith('/assets')) {
        
    } else if (req.url.startsWith('/add') && req.method == 'GET') {
        // 如果是 get 请求
        // 获取前端表单提交的数据
        // 读取全部的数据,转换成 js 对象
        // 将新添加的数据,追加到数组中
        // 将数组转换成 json 字符串,写到 data.json 中
        // 跳转到列表页,看到添加效果

        // console.log(url.parse(req.url,true).query);
        // 获取的是一个对象
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
       
        // res.end('ok');

    } else if (req.url.startsWith('/add') && req.method == 'POST') {
        // post 请求获取数据
        // 得到全部的数据
        // 添加数据,写入数据
        // 只要前端以 post 向后台提交数据,都会触发 data 事件,并且 data 事件可能触发多次
        // 如果浏览器传递数据完毕,就会触发 end 事件,在 end 事件中使用接收的数据
        // 前端传递给后台得是字符串
       

    } else {
       
    }

  }

  