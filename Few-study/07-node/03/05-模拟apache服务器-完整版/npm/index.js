// // 需求： 当用户请求服务器时，返回 一个真实的html页面

// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// // 引入mime模块
// const mime = require('mime');

// const server = http.createServer(); //创建服务器 

// // 监听 处理请求
// server.on('request', (req, res) => {
//     console.log(req.url);
//     // 设置响应头
//     // res.setHeader('content-type', 'text/html;charset=utf-8'); 
//     //根据当前请求文件类型，设置对应的mime类型，（动态设置的）
//     // html    text/html
//     // css     text/css
//     // img.jpg image/jpg
//     // avi     video/avi 

//     //根据请求url地址，读取对应的文件进行返回
//     fs.readFile(path.join(__dirname, 'pages', req.url), (err, data) => {
//         if (err) {
//            return console.log('读取失败', err);            
//         }
//         //根据当前文件的url设置mime类型 
//         res.setHeader('content-type', mime.getType(req.url));
//         //设置响应主体
//         res.end(data);
//     });


//     // res.end('ok');
// })

// server.listen(9999, () => { console.log('http://localhost:9999/index.html 服务器已启动') });

// // 引入模块
// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const mime = require('mime');

// const server = http.createServer();
// server.on('request',(req,res)=>{
//     // res.end('ok');
//     // res.end('ok');

//     fs.readFile(path.join(__dirname,'pages',req.url),(err,data)=>{
//         // console.log(req.url);
//             if (err) {
//                 return console.log('读取失败',err);
//             }
//             res.setHeader('content-type',mime.getType(req.url));
//             res.end(data);
//         })

// });


// server.listen(9999,()=>{
//     console.log('http://localhost:9999 服务器启动了');   
// })

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();
server.on('request', (req, res) => {
    fs.readFile(path.join(__dirname,'pages',req.url),(err,data)=>{
        if (err) {
            console.log('读取失败',err);
        }
        //动态的设置响应头
        

    })
});