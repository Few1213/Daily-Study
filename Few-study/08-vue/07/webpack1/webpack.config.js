// 1 引入路径模块
const path = require('path')


// 6 设置常用的插件 
// 6.1 html-webpack-plugin 生成一个自动引入 bundle.js 的 html 入口文件
// y引入模块
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 6.2 webpack-dev-server 
// - 自动开启http服务
// - 自动打开浏览器
// - 自动监视文件的变化
// - 引入，每次修改代码，都需要重新打包

// 6.3 hot 热更新的配置
const webpack = require('webpack')


// 2 输出
module.exports = {
    // 3 设置入口
    entry: path.join(__dirname, 'src', 'main.js'),
    // 4 设置出口
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // 5 设置模式
    mode: 'development',
    // 6 设置常用的插件
    plugins: [
        htmlWebpackPlugin = new HtmlWebpackPlugin({
            // 指定渲染的源文件
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    // 6.2 webpack-dev-server 插件
    devServer: {
        // 端口
        port: 9999,
        // 是否打开浏览器
        open: true,
        // 6.3 是否热更新(局部更新)
        hot: true
    },
    //  7 配置所有的 loader
    //  loader 需要先装载 然后配置选项
    module: {
        rules: [
            // css 文件
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // less 文件
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // 处理图片文件
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            // 处理小图 以编码形式写入到 bundle 中 会增加30%的体积
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },
            // url-loader 处理字体图标
            {
                // 配置字体图标加载
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // 限定文件大小
                        limit: 819200
                    }
                }]
            }
        ]
    }
}