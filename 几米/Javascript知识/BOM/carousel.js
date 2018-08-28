// 获取元素简写
function my$(id) {
    return document.getElementById(id);
}
// 获取所有的元素
// 获取最外面的box
var box = my$("box");
// 获取相框
var inner = box.children[0];
// 获取相框的宽度
var imgwidth = inner.offsetWidth;
//获取ul
var ulObj = inner.children[0];
//获取li
var liObjs = ulObj.children;
// 获取角标
var corner = inner.children[1];
// 获取span
var spanObjs = corner.children;
//获取左右按钮
var focus = my$("focus");
//设置索引值
var index = 0;

//创建小按钮,根据ul中li的个数
for (var i = 0; i < liObjs.length; i++) {
    //创建span标签
    var spanObjs = document.createElement("span");
    corner.appendChild(spanObjs);
    spanObjs.setAttribute("index", i);
    spanObjs.innerHTML = (i + 1);
    //设置鼠标进入事件
    spanObjs.onmouseover = function () {
        //清除所有的样式
        for (var j = 0; j < corner.children.length; j++) {
            corner.children[j].removeAttribute("class");
        }
        // 设置当前的样式
        this.className = "current";
        index = this.getAttribute("index");
        animate(ulObj, -index * imgwidth);
    }
}
//设置第一个小按钮的默认样式为红色
corner.children[0].className = "current";
//克隆一个li
ulObj.appendChild(ulObj.children[0].cloneNode(true));


//自动播放
var timeId = setInterval(clickHandle, 1000);
//鼠标进入box的div显示左右焦点的dic
box.onmouseover = function () {
    my$("focus").style.display = "block";
    //鼠标进入停止自动播放
    clearInterval(timeId);
};
//鼠标离开box的div隐藏左右焦点的div
box.onmouseout = function () {
    my$("focus").style.display = "none";
    // 鼠标离开继续定时播放
    timeId = setInterval(clickHandle, 1000);
};
//设置左边按钮的点击事件
my$("focus").children[0].onclick = function () {
    if (index == 0) {
        corner.children[index].className = "current";
        index = ulObj.children.length - 1;
        ulObj.style.left = -index * imgwidth + "px";
    }
    index--;
    animate(ulObj, -index * imgwidth);
    for (var j = 0; j < corner.children.length; j++) {
        corner.children[j].removeAttribute("class");
    }
    corner.children[index].className = "current";

};
//设置右边按钮的点击事件
my$("focus").children[1].onclick = clickHandle;

function clickHandle() {
    if (index == ulObj.children.length - 1) {
        index = 0;
        ulObj.style.left = 0 + "px";
    }
    index++;
    animate(ulObj, -index * imgwidth);
    //关联右下角角标的切换事件
    //index最大时候显示的是第一张图片,第一个小按钮有颜色
    if (index == ulObj.children.length - 1) {
        corner.children[0].className = "current";
        corner.children[corner.children.length - 1].className = "";
    } else {
        for (var j = 0; j < corner.children.length; j++) {
            corner.children[j].removeAttribute("class");
        }
        corner.children[index].className = "current";
    }
};

//封装的动画函数
function animate(element, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var current = element.offsetLeft;
        var step = 10;
        step = current < target ? step : -step;
        current += step;
        if (Math.abs(current - target) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            clearInterval(element.timeId);
            element.style.left = target + "px";
        }
    }, 10);
}