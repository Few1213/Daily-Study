const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack')

// 设置导出项
module.exports = {
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'src','index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        port: 9999,
        open: true,
        hot: true
    }
}