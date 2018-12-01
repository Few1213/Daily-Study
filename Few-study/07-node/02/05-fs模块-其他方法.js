// 1-导入fs模块
const fs = require('fs');

// 重命名文件 
// fs.rename('./data1.txt', 'text.txt', err => {
//     if (err) {
//         return console.log('修改失败');        
//     }
//     console.log('修改成功');    
// })

//删除文件 
fs.unlink('./data2.txt', err => {
    if (!err) {
        console.log('删除成功');        
    }
}) 