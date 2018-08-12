//获取页面中的元素
// 获取box
var box = my$("box");
//获取相框
var inner = box.children[0];
// 获取相框的宽度
var imgWidth = inner.offsetWidth;
//获取ul
var ulObj = inner.children[0];
// 获取li
var liObjs = ulObj.children;
//获取右下角的角标
var corner = inner.children[1];
// 获取span
var spanObjs = corner.children;
// 获取左右按钮
var focus = my$("foxus");
//设置初始的索引值
var index = 0;
// 总的思路:
// 1.先创建和设置角标的显示效果
// 2.设置点击角标图片移动的效果
// 3.设置左右按钮的图片移动效果
// 4.关联左右按钮和角标的图片移动效果
// 5.设置图片自动轮播(定时器)

//获取li的个数并在corner里创建相对应个数的span
for (var i = 0; i < liObjs.length; i++) {
    //创建span
    var spanObjs = document.createElement("span");
    //把span加入到父级元素中
    corner.appendChild(spanObjs);
    // 添加span中的内容
    spanObjs.innerHTML = (i + 1);
    //设置获取span的索引值
    spanObjs.setAttribute("index", i);
    // 为span设置鼠标进入事件
    spanObjs.onmouseover = function () {
        //清除所有span的样式并设置当前的样式
        for (var j = 0; j < corner.children.length; j++) {
            corner.children[j].className = "";
            //这里使用corner.children的原因是在遍历li的循环中spanObjs中的元素还没有完全创建好,所以使用spanObj.length 和spanObjs[j]会出错
        }
        this.className = "current";
        //设置鼠标进入图片移动的功能
        index = this.getAttribute("index");
        // 设置图片移动的距离
        animate(ulObj, -index * imgWidth);
    };
}
corner.children[0].className = "current";
//设置鼠标进入box显示左右按钮的效果
my$("box").onmouseover = function () {
    my$("focus").style.display = "block";
    clearInterval(timeId);
};
//  设置鼠标移出box的效果
my$("box").onmouseout = function () {
    my$("focus").style.display = "none";
    timeId=setInterval(clickHandle,1000);
};
//  克隆ul中的第一个子元素
ulObj.appendChild(ulObj.children[0].cloneNode(true));


function clickHandle() {
    //    当索引值为克隆的标签时,将索引值设置为0,并重置图片的位置
    if (index == ulObj.children.length - 1) {
        index = 0;
        ulObj.style.left = 0 + "px";

    }
    index++;
    animate(ulObj, -index * imgWidth);
    //索引值关联角标
    if (index == ulObj.children.length - 1) { //!!!!!!!
        corner.children[0].className = "current";
        corner.children[corner.children.length - 1].className = "";
    } else {
        for (var j = 0; j < corner.children.length; j++) {
            corner.children[j].className = "";
        }
        corner.children[index].className = "current";
    }
}
// 设置自动轮播
var timeId=setInterval(clickHandle,1000);
// 设置右边按钮的图片移动效果
my$("focus").children[1].onclick = clickHandle;
// 设置左边按钮的图片移动效果
my$("focus").children[0].onclick = function () {
    if (index == 0) {
        corner.children[index].className = "current";
        index = ulObj.children.length - 1
        ulObj.style.left = -index * imgWidth + "px";
    }
    index--;
    animate(ulObj, -index * imgWidth);
    for (var j = 0; j < corner.children.length; j++) {
        corner.children[j].className = "";
    }
    corner.children[index].className = "current";

};
//设置移动动画函数
function animate(element, target) {
    //清除定时器
    clearInterval(element.timeId);
    //设置定时器
    element.timeId = setInterval(function () {
        //获取当前的距离
        var current = element.offsetleft;
        // 设置每次移动的步数   
        var step = 10;
        // 判断往哪个方向移动
        step = target > current ? step : -step;
        current += step;
        // 判断当前位置和目标位置之间的距离,大于每次行走的距离定时器继续,小于则马上到达目的地并停止定时器
        if (Math.abs(target - current) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            element.style.left = target + "px";
            clearInterval(element.timeId);
        }
    }, 10);


}