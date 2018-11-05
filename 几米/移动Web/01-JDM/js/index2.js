/* 
1 头部导航栏随着页面向下滚动逐渐变红
2 秒杀 ul 宽度的动态获取
3 京东快报轮播
4 秒杀功能
5 banner轮播图 
*/
window.onload = function () {
    //  头部功能
    ; (function () {
        var header = document.querySelector(".header");
        // console.log(1);

        window.addEventListener("scroll", function () {
            // console.log(2);
            var scrollTop = window.pageYOffset;
            // console.log(scrollTop);
            var opacity = scrollTop / 600 * 0.9;
            header.style.backgroundColor = "rgba(222, 24, 27, " + opacity + ")";

        })

    })();

    // 秒杀模块 ul 宽度的动态获取
    ; (function () {
        var ul = document.querySelector(".seckill .concent ul");
        var lis = ul.children;
        var width = lis[0].offsetWidth;
        // console.log(width);
        ul.style.width = width * lis.length + "px";
    })();

    // 京东快报轮播
    ; (function () {
        var ul = document.querySelector(".news .info ul");
        var height = ul.children[0].offsetHeight;
        // console.log(height);

        var index = 0;
        var timer = setInterval(function (param) {
            index++;
            ul.style.transition = "all .5s";
            ul.style.transform = "translateY(-" + index * height + "px)";
        }, 2000);

        ul.addEventListener("transitionend", function (param) {
            if (index >= ul.children.length - 1) {
                index = 0;
                ul.style.transition = "none";
                ul.style.transform = "translateY(0px)";
            }
        });
    })();

    //   秒杀功能
    ; (function (param) {
        var div = document.querySelector(".seckill .title_l");
        var spans = div.children;
        // 在这里注意不要使用 - 连接, 在 ios 中不能被识别
        var setTime = new Date("2018/11/5 18:30");
        var timer = setInterval(function () {
            var time = new Date();
            time = parseInt((setTime - time) / 1000);
            // console.log(time);
            if (time <= 0) {
                time = 0;
                clearInterval(timer);
            }

            var hours = parseInt(time / 3600);
            // console.log(hours);
            var minutes = parseInt(time / 60 % 60);
            // console.log(minutes);
            var seconds = parseInt(time % 60);
            // console.log(seconds);
            spans[1].innerHTML = addZero(hours);
            spans[3].innerHTML = addZero(minutes);
            spans[5].innerHTML = addZero(seconds);

        }, 1000);


        //函数这里有一些不顺
        function addZero(n) {
            return n < 10 ? "0" + n : n;
        }
    })();


    // banner轮播图 
    ; (function () {
        //因为移动端左右皆可移动,所以在头尾各多添加一张图片
        //添加完之后总共十张图片  实际轮播的图片为八张
        // 0~9  0~7  实际的索引为 1-8
        //先动态的设置 ul 的宽度 和 ol 里 li 的个数

        var ul = document.querySelector(".banner ul");
        var ol = document.querySelector(".banner ol");
        var lis = ul.children;
        var width = lis[0].offsetWidth;
        var index = 1;
        var str = "";

        // console.log(lis);
        //动态的设置ul的宽度
        ul.style.width = width * lis.length + "px";
        //动态的设置 ol 里 li 的个数
        Array.prototype.forEach.call(lis, function (v, i) {
            // 这里有十个 li 参与循环 要选取其中的下标为 1~8 的li
            // console.log(i);  0-9
            // console.log(lis.length);      
            if (i === 1) {
                str += "<li class=\"active\"></li>";
            } else if (i > 1 && i <= lis.length - 2) {
                str += "<li></li>";
            }
            // console.log(1);
        });
        // console.log(str);
        ol.innerHTML = str;

        // 设置定时器
        var timer = setInterval(function (param) {
            index++;
            addTransition();
            setTransform(-index * width);
            // console.log(index);

        }, 2000);

        //设置过渡结束后判断 index 的值,完成首尾连接效果
        ul.addEventListener("transitionend", function () {
            if (index >= lis.length - 1) {
                index = 1;
            } else if (index <= 0) {
                index = lis.length - 2;
            }
            removeTransition();
            setTransform(-index * width);

            //动态设置小圆点的背景
            Array.prototype.forEach.call(ol.children, function (v, i) {
                // console.log(1);
                v.classList.remove("active");
            })
            ol.children[index - 1].classList.add("active");

        })

        // 在下方处理手指触摸的事件
        /* touchstart      手指触摸时候触发
        touchmove       手指在屏幕上移动触发,多次触发
        touchend        手指离开时候触发
        touchcancel     系统操作被打断
        在每个手指事件中都有以下的属性和方法
        changedtouches  触摸时发生改变的手指
        targetTouches   dom元素上的手指
        touches         当前屏幕上的手指 */

        var stratX = 0;
        ul.addEventListener("touchstart", function (e) {
            //触摸时候获取当前手指坐标
            startX = e.changedTouches[0].clientX;
            /* console.log(startX);
            console.log(e.changedTouches);
            console.log(e); */
            
            
                 
        });

        ul.addEventListener("touchmove", function (e) {

        });

        ul.addEventListener("touchend", function (e) {
            var distanceX = 
        });













        //  把经常用到的代码封装以便于复用
        //  添加过渡效果
        function addTransition(param) {
            ul.style.transition = "all .2s";
            ul.style.webkitTransition = "all .2s";
        }
        // 移除过渡效果
        function removeTransition(param) {
            ul.style.transition = "none";
            ul.style.webkitTransition = "none";
        }
        //  设置效果
        function setTransform(value) {
            ul.style.transform = "translateX(" + value + "px)";
            ul.style.webkitTransform = "translateX(" + value + "px)";
        }


        //处理一些小 bug
        window.addEventListener("resize", function (param) {
            //窗口大小重新改变后 重新获取 li 的宽度
            width = lis[0].offsetWidth;
        })
    })();


};

