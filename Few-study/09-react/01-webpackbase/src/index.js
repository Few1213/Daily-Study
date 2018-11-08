// 1-这两个导入的时候,接收的成员名称,必须这么写
import React from 'react'; // 创建组件,虚拟 dom 元素,生命周期
import ReactDOM from 'react-dom'; // 把创建好的 组件 和 虚拟DOM 放到页面上展示的

// 2-创建虚拟的 DOM 元素
// 参数1: 创建的元素类型,字符串,表示元素的名称
// 参数2: 是一个对象或者 null, 表示 当前这个 DOM 元素的属性
// 参数3: 子节点(包括 其他虚拟 DOM 获取 文本子节点)
// 参数n: 其他子节点
const myh1 = React.createElement('h1', { id: 'myh1', title: 'this is a h1' }, '第一个H1');

const mydiv = React.createElement('div',null,'这是一个div',myh1);

// 渲染 页面上的 DOM 元素结构,最好的方式就是写HTML代码


// 3-使用 ReactDOM 把 虚拟DOM 渲染到页面上
// 参数1: 要渲染的那个虚拟DOM 元素
// 参数2: 指定页面上DOM元素对象 当一个容器
ReactDOM.render(mydiv,document.querySelector('.box'));