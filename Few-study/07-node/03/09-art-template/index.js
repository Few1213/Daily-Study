// 引入模版引擎
const http = require('http');
const fs = require('fs');
const path = require('path');
const template = require('art-template');

let data = {
    title: '大前端',
    list: ['前端1','前端2','前端3','前端4','前端5','前端6','前端7']
}

const server = http.createServer();

server.on('request', (req, res) => {
    //请求服务器，直接返回index.html 
    // fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    //     if (err) {
    //       return  console.log(err);            
    //     }
    //     res.end(data);
    // });

    //使用模版引擎动态渲染 
    //前端 template(模版id, 对象);
    //node template(路径， 对象)

    let str = template(path.join(__dirname, 'index.html'), data);

    res.end(str);

});

server.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));