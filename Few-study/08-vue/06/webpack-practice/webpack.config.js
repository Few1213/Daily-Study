const path = require('path')

module.exports = {
    // 设置入口文件
    entry: path.join(__dirname,'index.js'),
    // 设置出口
    output:{
        // 设置输出目录
        path:path.join(__dirname,'dist'),
        // 设置输出文件
        filename: 'bundle.js'
    },
    "mode":"production"
}