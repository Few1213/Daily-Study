// 需求 :   根据屏幕大小,替换轮播图中的图片 dada
$(function () {
    $(window).resize(function (param) {
        var $width = $(window).width();
        var $imgs = $(".carousel-inner .item img");

        var $src = $width >= 640 ? true : false;

        $imgs.each(function (index, eleemnt) {
            var $src = $width >= 640 ? $(this).data("psrc") : $(this).data("msrc");
            $(this).attr("src", $src);
        })

    })
})

// 轮播图移动端手指滑动效果
$(function () {
    var startX = 0;
    var $carousel = $(".carousel");

    $carousel.on("touchstart", function (e) {
        //记录手指触摸的坐标
        startX = e.originalEvent.changedTouches[0].clientX;
    })

    $carousel.on("touchend", function (e) {
        var distanceX = e.originalEvent.changedTouches[0].clientX - startX;
        // 防止误触
        if (distanceX > 50) {
            $carousel.carousel("prev");
        }
        if (distanceX < -50) {
            $carousel.carousel("next");
        }
    })
});

// 产品模块的滚动效果
$(function () {
    var $ul = $(".ul-wrap");
    var $nav = $(".nav-tabs");
    var lis = $nav.children();
    var width = 0;
    lis.each(function (index, ele) {
        width += $(this).width();
    });
    // console.log(width);
    // 把获取到的宽度赋值给ul
    $nav.width(width);
    new IScroll(".ul-wrap", {
        scrollX: true,
        scrollY: false
    });

});
