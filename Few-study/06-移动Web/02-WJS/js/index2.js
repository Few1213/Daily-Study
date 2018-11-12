// 需求1 根据屏幕大小,切换图片的路径
// 需求2 小屏幕下的左右滑动

$(function () {
    var $imgs = $(".carousel-inner .item img");
    $(window).resize(function () {
        var width = $(window).width();
        // console.log(width);
        $imgs.each(function (index, ele) {
            var src = width > 640 ? $(this).data("psrc") : $(this).data("msrc");
            $(this).attr("src", src);
        });
    });
    //需要触发一次 resize 事件
    $(window).trigger("resize");
});


// 需求2 小屏和超小屏 触摸滑动效果
$(function () {
    var $carousel = $(".carousel");
    var startX = 0;

    $carousel.on("touchstart", function (e) {
        startX = e.originalEvent.changedTouches[0].clientX;
        // console.log(startX);

    })
    $carousel.on("touchend", function (e) {
        // console.log(e);
        var distanceX = e.originalEvent.changedTouches[0].clientX - startX;

        if (distanceX > 50) {
            $carousel.carousel('prev');
        }
        if (distanceX < -50) {
            $carousel.carousel('next');
        }
    })
});