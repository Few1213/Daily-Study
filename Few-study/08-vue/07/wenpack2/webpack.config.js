const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

// 设置导出项
module.exports = {
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins:[
        new HtmHtmlWebpackPlugin()
    ]
}