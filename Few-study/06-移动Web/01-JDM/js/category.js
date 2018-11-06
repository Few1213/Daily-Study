/* 需求:
左侧 和 右侧 的弹簧效果
功能分析:
手指触摸可以向上或者向下拖拽页面
拖到顶部和底部会弹回来 */

//左侧热门推荐的弹簧功能
//获取元素
var ul = document.querySelector(".content_left ul");
var box = document.querySelector(".content_left");

// console.log(box.offsetHeight);


// 注册 ul 的触摸事件
//手指刚开始触摸 记录触摸的坐标,然后根据移动的坐标判断向上滑动还是向下滑动,将这个值赋值给ul,还需要定义一个变量记录ul移动后的坐标

var startY = 0;
var clientY = 0;
ul.addEventListener("touchstart", function (e) {
    startY = e.touches[0].clientY;
    // console.log(startX);

});

// 手指移动
ul.addEventListener("touchmove", function (e) {
    var distanceY = e.touches[0].clientY - startY;
    ul.style.transition = "none";
    ul.style.transform = "translateY(" + (distanceY + clientY) + "px)";


});

//手指离开
ul.addEventListener("touchend", function (e) {
    var distanceY = e.changedTouches[0].clientY - startY;
    clientY += distanceY;

    if (clientY >= 0) {
        clientY = 0;
        ul.style.transition = "all .5s";
        ul.style.transform = "translateY(0px)";
    }

    var minY = -(ul.offsetHeight-box.offsetHeight);

    if (clientY < minY) {
        clientY = minY;
        ul.style.transition = "all .5s";
        ul.style.transform = "translateY("+minY+"px)";
    }




});
