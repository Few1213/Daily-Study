// const fs = require('fs');
// const path = require('path');

// // console.log(__dirname + '/data/news.txt');

// console.log(path.join(__dirname, 'data', 'news.txt'));

// // E:\前端视频\29期就业班\nodejs\02\04-代码/data/news.txt

// fs.readFile(path.join(__dirname, 'data', 'news.txt'), 'utf-8', (err, data) => {
//     console.log(err);
//     console.log(data);        
// })

// const fs = require('fs');
// const path = require('path');
// console.log(__dirname);

// fs.readFile(path.join(__dirname,'data.txt'),'utf-8',(err,data)=>{
//     if (err) {
//         console.log('读取失败',err);
        
//     }
    
//     console.log('读取成功',data);
    
// })

// const fs = require('fs');
// const path = require('path');

// fs.writeFile(path.join(__dirname,'data','news.txt'),"嗨嗨",'utf-8',(err)=>{
//     console.log(err);
    
// })

const fs = require('fs');
const path = require('path');
fs.appendFile(path.join(__dirname,'data','news.txt'),'\r\nhh','utf-8',(err)=>{
    if (err) {
        console.log(err);
        
    }
})