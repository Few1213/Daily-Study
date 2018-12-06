// // 处理静态资源 
// const express = require('express');
// const path = require('path');

// const app = express(); //创建服务器
// // express 提供托管静态资源的方法 
// // app.use(express.static('静态资源所在目录'));
// // 告诉express pages下面都是静态资源 

// app.use('/pages', express.static('pages'));

// // app.use((req, res) => {
// //     console.log(req.url);
// //     // 直接读取静态文件返回即可 
// //     res.sendFile(path.join(__dirname, 'pages', req.url));
// //     // res.send('ok');   
// // });

// app.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));

const express = require('express');
const path = require('path');
const app = express();
app.use('pages',express.static('pages'));
app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'pages',req.url));

});

// app.use('/pages',express.static('./pages'));
app.listen(9999,()=>{
    console.log('http://localhost:9999 服务器启动了');
})

