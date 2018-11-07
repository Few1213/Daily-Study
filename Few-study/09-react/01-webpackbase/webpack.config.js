const path = require('path');
//导入 在内存中自动生成 index 页面的插件
const HtmlWebPackPlugin = require('html-webpack-plugin');

//创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template:path.join(__dirname,'./src/index.html'), //文件
    filename: 'index.html' //生成内存中首页的名称
});


// 向外暴露一个配置对象 因为 webpack 是基于 node 构建的; 所以 webpack 支持所有的 Node API 和语法
module.exports = {
    mode:'development' , //development 开发 production 生产 (约定大于配置!!!)
    plugins:[
        htmlPlugin
    ]
}