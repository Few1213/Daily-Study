// fs.writeFile(文件路径， 数据， [编码], function(err) {  })
// 写入内容时，你会覆盖掉之前的内容 
// 如果指定的文件不存在，会创建一个文件，在写入内容 
// //导入fs模块 
// const fs = require('fs');

// //向文件中写入内容 
// fs.writeFile('./data1.txt', '电脑还是挺好用的', err => {
//     if (err) {
//         return console.log('写入失败', err);        
//     }
//     console.log('写入成功');    
// })

// const fs = require('fs');
// fs.writeFile('./data.txt','hello world','utf-8',(err)=>{
//     if (err) {
//         console.log('写入失败',err);
//     }
//     console.log('写入成功');
// })

// const fs = require('fs');
// fs.writeFile('./data.txt','我觉得可还行','utf-8',(err)=>{
//     if (err) {
//         console.log('写入失败',err);       
//     }
//     console.log('写入成功');   
// })

const fs = require('fs');
fs.writeFile('./data.txt','今天是个好天气','utf-8',(err)=>{
    if (err) {
        console.log('写入失败',err);
    }
    console.log('写入成功');
    
})