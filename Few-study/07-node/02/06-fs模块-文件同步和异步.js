// fs模块中所有的读文件 都有同步和异步两种方式  
// 推荐使用异步，同步会阻塞程序运行 

const fs = require('fs'); 

// //异步读取文件  
// console.log(11111);
// fs.readFile('data.txt', 'utf-8', (err, data) => {
//     console.log(data);    
// })
// console.log(22222);

// 同步读取文件
console.log(33333);
// let data = fs.readFileSync('data.txt', 'utf-8');
console.log(fs.readFileSync('data.txt', 'utf-8'));
console.log(4444);
