//获取整个盒子
var box = my$("box");
//获取相框
var inner = box.children[0];
//获取ul
var ulObj = inner.children[0];
// 获取右下角脚角标的div
var badge = inner.children[1];
// 获取左右按钮
var focus = inner.children[2];
// 获取相框的宽度
var imgWidth = inner.offsetWidth;
// 获取ul里的所有li标签
var lists = ulObj.children;
//获取所有的span标签
var spanObjs = badge.children;
var index=0;
//设置图片的自动轮播效果
var current = 0;
function f1() {
    current -= 10;
    if (current < -1200) {
        ulObj.style.left = 0 + "px";
        current = 0;
    } else {
        ulObj.style.left = current + "px";
    }
}
//设置轮播的定时器
var timeId = setInterval(f1, 100);
//设置鼠标进入的事件
my$("box").onmouseover = function () {
    clearInterval(timeId);
    focus.style.display = "block";
};
//设置鼠标移出的事件
my$("box").onmouseout = function () {
    timeId = setInterval(f1, 100);
    focus.style.display = "none";
};
// //设置左按钮的点击事件
//
// focus.children[0].onclick=function () {
//    if (index<lists.length-2){
//        index++;
//        animate(ulObj,-index*imgWidth);
//    }
// };
// //设置右按钮的点击事件
// focus.children[1].onclick=function () {
//     if (index>0){
//         index--;
//         animate(ulObj,index*imgWidth)
//     }
// };
// //封装的移动的动画函数
// function animate(elemengt, target) {
//     clearInterval(timeId);
//     element.timeId1 = setInterval(function () {
//         var current = elemengt.offsetWidth;
//         var step = 10;
//         step = target > current ? step : -step;
//         current += step;
//         if (Math.abs(current - target) > Math.abs(step)) {
//             element.style.left = current + "px";
//         } else {
//             clearInterval(timeId);
//             element.style.left = target + "px";
//         }
//     }, 20);
// }
