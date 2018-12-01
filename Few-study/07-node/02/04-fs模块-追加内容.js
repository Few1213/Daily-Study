// //1-引入fs文件模块
// const fs = require('fs');

// //追加文件内容 
// //fs.appendFile(文件路径, 数据， [编码], err = > { })
// // 如果追加文件不存在，会先创建一个文件，在进行追加 
// fs.appendFile('./data2.txt', '\r\n如果遇见你要用光我辈子所有用运气，那就请你离我远一点！', err => {
//     if (err) {
//         return console.log('追加失败', err);        
//     }   
//     console.log('追加成功');    
// })


// const fs = require('fs');
// fs.appendFile('./data.txt','\r\n11111','utf-8',(err)=>{
//     if (err) {
//         console.log('追加失败',err);
        
//     }
//     console.log('追加成功');
    

// })

// const fs = require('fs');
// fs.writeFile('./data.txt','\r\n22222','utf-8',(err)=>{
//     if (err) {
//         console.log('追加失败',err);
        
//     }
//     console.log('追加成功');
    
// })

const fs = require('fs');
fs.appendFile('./data.txt','\r\n3333',(err)=>{
    if (err) {
        console.log('写入失败',err);
    }
    console.log('写入成功');
    
})

// fs 需要先导入 在使用  
// fs.readFile(路径, [编码], (err, data) => { })
// fs.writeFile(路径, 数据， [编码], err => { })
// fs.appendFile(路径, 数据， [编码], err => { })
// fs.unlink(路径， err=>{ })
// fs.rename(路径， 新文件名, err => { })