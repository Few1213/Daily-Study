## 创建基本的 webpack4.x 项目

##### 1 - 运行 npm init -y 快速初始化项目

##### 2 - 在项目根目录创建 src 源代码目录 和 dist 产品目录

##### 3 - 在 src 源代码目录下创建 index.html 和 index.js

##### 4 - 在命令行终端运行 webpack  会在 dist 文件夹中生成 main 文件

##### 5 - 安装实时编译的模块  cnpm i webpack-dev-server -D

	在 packpage.js 中添加  dev": "webpack-dev-server"
    	"dev": "webpack-dev-server --open --port 3000 --hot --host 127.0.0.1"

##### 6 - 在根目录下新建 webpack.config.js 文件

	module.exports = {
      		  mode: 'development'
  	  }

##### 7 - 配置 html-webpack-plugin 插件 把页面生成到内存中去

  	  cnpm i html-webpack-plugin -D

    const path = require('path');
    //导入 在内存中自动生成 index 页面的插件
    const HtmlWebPackPlugin = require('html-webpack-plugin');
    
    //创建一个插件的实例对象
    const htmlPlugin = new HtmlWebPackPlugin({
        template:path.join(__dirname,'./src/index.html'), //文件
        filename: 'index.html' //生成内存中首页的名称
    });
    
    module.exports = {
    mode:'development' , //development 开发 production 生产 (约定大于配置!!!)
    plugins:[
        htmlPlugin
    ]
    }
#####  1-这两个导入的时候,接收的成员名称,必须这么写

	import React from 'react'; // 创建组件,虚拟 dom 元素,生命周期
	import ReactDOM from 'react-dom'; // 把创建好的 组件 和 虚拟DOM 放到页面上展示的

#####  2-创建虚拟的 DOM 元素

###### 	参数1: 创建的元素类型,字符串,表示元素的名称

###### 	参数2: 是一个对象或者 null, 表示 当前这个 DOM 元素的属性

###### 	参数3: 子节点(包括 其他虚拟 DOM 获取 文本子节点)

###### 	参数n: 其他子节点

	const myh1 = React.createElement('h1', { id: 'myh1', title: 'this is a h1' }, '第一个H1');

	const mydiv = React.createElement('div',null,'这是一个div',myh1);

	 渲染 页面上的 DOM 元素结构,最好的方式就是写HTML代码

#####  3-使用 ReactDOM 把 虚拟DOM 渲染到页面上

	参数1: 要渲染的那个虚拟DOM 元素
 	参数2: 指定页面上DOM元素对象 当一个容器
	ReactDOM.render(mydiv,document.querySelector('.box'));





------------------------------以上配置完项目的基本结构-------------------------------

## react 的基本使用

##### 1-这两个导入的时候,接收的成员名称,必须这么写

	import React from 'react'; // 创建组件,虚拟 dom 元素,生命周期
	import ReactDOM from 'react-dom'; // 把创建好的 组件 和 虚拟DOM 放到页面上展示的

##### 2-创建虚拟的 DOM 元素

	参数1: 创建的元素类型,字符串,表示元素的名称
 	参数2: 是一个对象或者 null, 表示 当前这个 DOM 元素的属性
 	参数3: 子节点(包括 其他虚拟 DOM 获取 文本子节点)
	参数n: 其他子节点
	const myh1 = React.createElement('h1', { id: 'myh1', title: 'this is a h1' }, '第一个H1');

	const mydiv = React.createElement('div',null,'这是一个div',myh1);

	渲染 页面上的 DOM 元素结构,最好的方式就是写HTML代码

##### 3-使用 ReactDOM 把 虚拟DOM 渲染到页面上

 	参数1: 要渲染的那个虚拟DOM 元素
 	参数2: 指定页面上DOM元素对象 当一个容器
	ReactDOM.render(mydiv,document.querySelector('.box'));



