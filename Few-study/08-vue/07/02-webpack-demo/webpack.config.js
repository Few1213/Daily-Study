// 导入webpack配置对象
const path = require('path')
module.exports = {
  // 入口
  entry: path.join(__dirname, 'src', 'main.js'),
  // 出口
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // 打包模式
  mode: 'development'
}