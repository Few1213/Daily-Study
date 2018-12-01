//  在nodejs中只有global可以直接使用了，如果要使用其他模块 ，需要先引入，在使用 

//  定义模块
//  define([], function () { });
// 引入模块 
//  require(['./a', './b'], function () {})

// 导入fs模块 
// const fs = require('fs');

// 读取文件 
// 参数一： 文件路径
// 参数二： 读取文件完成的回调函数
//   err: 错误信息 
//   data: 读取的文件的数据 
//   data中数据默认是二进制的， 是一个buffer对象，  可以读取任何文件，可以通过buffer.toString()将二进制的数据转成字符串 
// fs.readFile(文件路径， function(err, data) {})
//fs.readFile(文件路路径， 文件编码, function (err, data) {})

// fs.readFile('./data.txt', (err, data) => {
//     if (err) {
//         console.log('读取失败', err);   
//         return;        
//     }
//     console.log('读取成功');
//     console.log(data.toString());   
    
// });



// fs.readFile('./test.html', 'utf-8' , (err, data) => {
//     if (err) {
//         console.log('读取失败', err);   
//         return;        
//     }
//     console.log('读取成功');
//     console.log(data);       
// });


// const fs = require('fs');

// fs.readFile('./data.txt','utf-8',(err,data) => {
//     if (err) {
//         return console.log('读取失败',err);
//     }
//     console.log('读取成功');
//     console.log(data);
// })

// 引入文件模块
// const fs = require('fs');
// // 读取文件
// fs.readFile('./data.txt','utf-8',(err,data)=>{
//     if (err) {
//         console.log('读取失败',err);        
//     }
//     console.log('读取成功',data);   
// })

const fs = require('fs');

fs.readFile('./data.txt','utf-8',(err,data)=>{
    if (err) {
        console.log('读取失败',err);
        
    }
    console.log('读取成功',data);
    
})
