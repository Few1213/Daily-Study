// // 1-引入fs模块
// // 注意： 
// // 操作文件时，在代码写相对路径，并不是相对于文件所在位置，而是相对node命令执行的位置；
// // 操作文件是建议使用绝对路径 
// const fs = require('fs');
// // 2-读取内容
// // fs.readFile('./text.txt', 'utf-8', (err, data) => {
// //     if (err) {
// //         return console.log('读取失败', err);        
// //     }
// //     console.log(data);    
// // })


// // fs.readFile('E:/前端视频/29期就业班/nodejs/02/04-代码/text.txt', 'utf-8', (err, data) => {
// //     if (err) {
// //         return console.log('读取失败', err);        
// //     }
// //     console.log(data);    
// // })
// // E:\前端视频\29期就业班\nodejs\02\04-代码/text.txt 
// fs.readFile(__dirname + '/data/news.txt', 'utf-8', (err, data) => {
//     if (err) {
//         return console.log('读取失败', err);        
//     }
//     console.log(data);    
// })

// // console.log(__filename);
// // console.log(__dirname);
// console.log(__dirname);

// const fs = require('fs');
// fs.readFile(__dirname+'/data.txt','utf-8',(err,data)=>{
//     // console.log(err);
//     console.log(data);
    
    
// })

// const fs = require('fs');
// fs.readFile(__dirname+'/data.txt','utf-8',(err,data)=>{
//     console.log(data);
    
// })

const fs = require('fs');
fs.readFile(__dirname+'/data.txt','utf-8',(err,data)=>{
    if (err) {
        console.log('读取失败',err);
    }
    console.log('读取成功');
    
})


