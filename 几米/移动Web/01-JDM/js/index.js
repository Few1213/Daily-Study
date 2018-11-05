window.onload = function () {
    /*
    * 功能分析:
    * 1. 动态修改头部透明度效果
    * 2. 动态设置秒杀底部 ul 的宽度
    * 3. 秒杀倒计时功能
    * 4. 京东快报
    * 5. 京东轮播图
    * */


    //  动态修改头部透明度效果
    ; (function () {
        var jd_header = document.querySelector('.jd_header');
        window.addEventListener("scroll", function () {
            // console.log(1);
            var scrollTop = window.pageYOffset;
            var opacity = 0;
            if (scrollTop >= 600) {
                opacity = 0.9;
            } else {
                opacity = scrollTop / 600 * 0.9;
            }
            jd_header.style.backgroundColor = "rgba(222, 24, 27, " + opacity + ")";

        })

    })();

    // 动态设置秒杀底部 ul 的宽度
    ; (function () {
        var ul = document.querySelector(".seckill_content ul");
        var lis = document.querySelectorAll(".seckill_content ul li");
        var width = lis[0].offsetWidth * lis.length;
        // console.log(lis[0].offsetWidth);
        ul.style.width = width + "px";

    })()


        //   秒杀倒计时功能
        ; (function () {
            // 设置秒杀的时间
            // 获取当前的时间
            // 逐个设置span的值
            var spans = document.querySelectorAll(".jd_seckill div span:nth-child(2n)");
            // console.log(spans);
            setTime();
            var timer = setInterval(setTime, 1000);
            function setTime() {
                var seckillTime = new Date("2018/11/3 20:54");
                var now = new Date();
                var time = parseInt((seckillTime - now) / 1000);
                // console.log(time);

                if (time <= 0) {
                    time = 0;
                    clearInterval(timer);
                }
                var hours = parseInt(time / 3600);
                var minites = parseInt(time / 60) % 60;
                var seconds = time % 60;

                spans[0].innerHTML = addZero(hours);
                spans[1].innerHTML = addZero(minites);
                spans[2].innerHTML = addZero(seconds);

            }
            function addZero(n) {
                return n < 10 ? "0" + n : n;
            }
        })()

        //京东快报的功能
        ; (function () {
            var ul = document.querySelector(".jd_news .info ul");
            var lis = ul.children;
            var liHeight = lis[0].offsetHeight; // li的高度


            var index = 0;
            setInterval(function () {
                index++;
                ul.style.transform = "translateY(-" + index * liHeight + "px)";
                ul.style.transition = "all .5s";
            }, 1000);

            ul.addEventListener("transitionend", function () {
                if (index >= lis.length - 1) {
                    index = 0;
                    ul.style.transition = "none";
                    ul.style.transform = "translateY(0px)";
                }
            })
        })()

        //轮播图
        //动态的设置ul的宽度
        //设置定时器
        ; (function () {
            // var ul = document.querySelector(".banner ul");
            // var banner = document.querySelector(".banner");
            // // var lis = ul.children;
            // var lis = document.querySelectorAll(".banner ul li");
            // var ol = document.querySelector(".banner ol");
            // var liWidth = lis[0].offsetWidth;
            // var index = 1;
            // var str = "";

            // //设置小按钮 
            // for (var i = 0; i < lis.length - 2; i++) {
            //     if (i == 0) {
            //         str += "<li class=\"active\"></li>";

            //     } else {
            //         str += "<li></li>";

            //     }
            // }


            // ol.innerHTML = str;
            // var olis = document.querySelectorAll(".banner ol li");
            // //需

            // // ul.style.width = liWidth*lis.length+"px";
            // // lis.forEach(function (v,i) {
            // //     v.style.width = liWidth+"px";
            // //   })

            // setTime();
            // var timer = setInterval(setTime, 2000);
            // function setTime() {
            //     index++;
            //     ul.style.transform = "translateX(-" + index * liWidth + "px)";
            //     ul.style.transition = "all 0.5s";
            //     // console.log(olis);
            //     olis.forEach(function (v, i) {

            //         v.classList.remove("active");
            //     });
            //     olis[index - 1].classList.add("active");

            // }
            // ul.addEventListener("transitionend", function () {
            //     if (index >= lis.length - 2) {
            //         index = 1;
            //         ul.style.transform = "translateX(0px)";
            //         ul.style.transition = "none";
            //     }
            //     if (index <= 0) {
            //         index = lis.length - 2;
            //         ul.style.transform = "translateX(-" + index * liWidth + "px)";
            //         ul.style.transition = "none";
            //     }
            // })


            var ul = document.querySelector(".banner ul");
            var lis = ul.children;
            var width = lis[0].offsetWidth;
            var olis = document.querySelectorAll(".banner ol li");
            var index = 1;

            var timer = setInterval(function () {
                // console.log(index);
                index++;
                addTransiton();
                setTranslateX(-index * width);

            }, 2000);

            ul.addEventListener("transitionend", function () {
                if (index >= lis.length - 1) {
                    index = 1;
                }
                if (index <= 0) {
                    index = lis.length - 2;
                }
                removeTransition();
                setTranslateX(-index * width);

                //设置小圆点
                olis.forEach(function (v,i) {
                    v.classList.remove("active");
                  });
                olis[index-1].classList.add("active");
            })

            //给 ul 添加过渡
            function addTransiton() {
                ul.style.transition = "all .2s";
                ul.style.webkitTransition = "all .2s";
            }
            // 给 ul 去除过渡
            function removeTransition() {
                ul.style.transition = "none";
                ul.style.webkitTransition = "none";
            }
            //给 ul 设置移动的效果
            function setTranslateX(value) {
                ul.style.transform = "translateX(" + value + "px)";
                ul.style.webkitTransform = "translateX(" + value + "px)";
            }

            //手指的滑动事件
            //因为手指是在ul上触摸的 所以给 ul 注册手指事件
            // touchstart touchmove touchend touchcancel
            //  手指触摸    手指移动    手指离开  被打断
            // changedTouches targetTouches touches
            //手指事件的状态改变  手指事件的对象 手指事件

            //需要在手指触摸的时候记录下当前手指的坐标
            var startX = 0;
            var srartTime;
            ul.addEventListener("touchstart",function (e) {
                // console.log(e);
                startTime = new Date();
                startX = e.changedTouches[0].clientX;
                // console.log(startX);
                //开始触摸的时候 需要停下一直循环的定时器,离开的时候恢复
                clearInterval(timer);


              })
            ul.addEventListener("touchmove",function (e) {
                // console.log('移动中');
                var distanceX = e.changedTouches[0].clientX - startX;
                //手指按住移动的时候,需要按住拖拽的效果此时的图片应该是静止的
                //图片当前移动的距离应该为手指移动的距离 加上之前移动的距离
                // removeTransition();
                setTranslateX(-index*width+distanceX);
                
              });
            ul.addEventListener("touchend",function(e){
                // console.log("离开了");
                // 在手指离开的时候判断滑动的距离
                var time = new Date() - startTime;
                var distanceX = e.changedTouches[0].clientX - startX;
                if (distanceX >= width/3 || (distanceX >=60 && time<300)) {
                    index--;
                }else if(distanceX <= -width/3 || (distanceX < -60&&time<300)){
                    index++;
                }
                addTransiton();
                setTranslateX(-index*width);

                // 重新开启定时器
                timer = setInterval(function () {
                    // console.log(index);
                    index++;
                    addTransiton();
                    setTranslateX(-index * width);
    
                }, 2000);

                
            })
            //在屏幕宽度变化后 需要动态更新
            window.addEventListener("resize",function () {
                width = lis[0].offsetWidth;
                removeTransition();
                setTranslateX(-index*width);
              })

        })()

}