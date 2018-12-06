// const express = require('express');

// const app = express(); 

// // 到时express 使用什么模块引擎
// // app.engine(模版后缀名, 模版);
// app.engine('html', require('express-art-template'));
// // app.engine('html',require('express-art-template'));


// // 在express中，模版引擎默认会去views目录中查找 指定模版 
// // 我们可以指定 模版存放目录 
// // app.set('views', 模版的目录);
// // app.set('views', './'); //模版引擎会去当前文件夹找模版 
// app.set('views', 'pages');  //模版会去当前目录pages文件夹下查找模版

// //监听处理请求 
// app.use((req, res) => {
//     //数据
//     let obj = {
//         title: '传智播客', 
//         list: ['黑马29期','黑马30期','黑马31期','黑马32期','黑马33期','黑马34期']
//     }

//     //渲染数据
//     res.render('index.html', obj);
//     // let str = template(path.join(__dirname, 'index.html'), obj);
//     // res.end(str);

//     //返回首页

// });

// app.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));

// const express = require('express');
// const app = express();

// app.engine('html', require('express-art-template'));

// // 设置真实目录
// app.set('views', 'pages');

// // 监听处理请求
// app.use((req, res) => {
//     let obj = {
//         title: '传智播客',
//         list: ['黑马29期', '黑马30期', '黑马31期', '黑马32期', '黑马33期', '黑马34期']
//     }
//     app.render('index',obj);
// })

// app.listen(9999,()=>{
//     console.log('服务器开启了');

//     })

// const express = require('express');
// const app = express();

// app.engine('html', require('express-art-template'));
// app.set('views', 'pages');
// app.use((req, res) => {
//     let obj = {
//         title: '传智播客',
//         list: ['黑马29期', '黑马30期', '黑马31期', '黑马32期', '黑马33期', '黑马34期']
//     }
//     app.render('index.html',obj);
// })
// app.listen(9999,()=>{

// });

const express = require('express');
const app = express();

app.engine('html',require('express-art-template'));
app.set('views','pages');
app.use((req,res)=>{
            let obj = {
        title: '传智播客',
        list: ['黑马29期', '黑马30期', '黑马31期', '黑马32期', '黑马33期', '黑马34期']
    }
    app.render('index.html',obj);
})
