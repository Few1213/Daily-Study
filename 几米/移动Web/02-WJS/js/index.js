//入口函数
//需求1：根据屏幕设备，给item添加 item_pc或者item_mobile
//需求2：根据屏幕设备，设置img的src属性，值存在 data-msrc中或者data-psrc
  // 如果是pc端，获取data-psrc值，设置给src属性
  // 如果移动端，data-msrc的值，设置给src属性


$(function () {

  //需求1：根据屏幕设备，给item添加 item_pc或者item_mobile
  var $carousel = $(".wjs_banner>.carousel");
  var $item = $carousel.find(".item");
  var $img = $carousel.find("img");

  //判断设备类型
  $(window).on("resize", function () {

    //获取屏幕的宽度
    var screenWidth = $(window).width();
    //判断是否是手机屏幕
    //var isMobile = screenWidth < 768 ? true : false;

    if (screenWidth <= 768) {
      //说明是手机屏幕
      $item.addClass("item_mobile").removeClass("item_pc");

      //给img设置src属性
      for (var i = 0; i < $img.length; i++) {
        $img[i].src = $img[i].dataset.msrc;
      }
      //$img.each(function () {
      //  $(this).attr("src",  $(this).data("msrc") );
      //});


    } else {
      $item.addClass("item_pc").removeClass("item_mobile");
      $img.each(function () {
        $(this).attr("src", $(this).data("psrc"));
      });


    }

  }).trigger("resize");


  //可以让轮播图自动播放
  var startX = 0;
  $carousel.on("touchstart", function (e) {
    //e.originalEvent  jquery事件对象中的原生的事件对象
    startX = e.originalEvent.touches[0].clientX;
    //console.log(startX);
  });

  $carousel.on("touchmove", function (e) {

  });

  $carousel.on("touchend", function (e) {
    var moveX = e.originalEvent.changedTouches[0].clientX - startX;
    //只要滑动距离超过50px，认定滑动成功。
    if (Math.abs(moveX) >= 50) {

      if (moveX > 0) {
        //上一张
        $carousel.carousel("prev");
      } else {
        $carousel.carousel("next");
      }

    }

  });

});



//产品tab滑动
$(function () {

  var $nav = $(".wjs_product .nav");
  var $li = $nav.find("li");

  var width = 0;
  $li.each(function () {

    //width: width
    //innerWidth:padding +width
    //outerWidth(false) : padding + border + width
    //outerWidth(true) : padding + border + margin + width
    width += $(this).outerWidth(true);
  });

  $nav.width(width);

  new IScroll(".nav_wrap", {
    scrollX:true,
    scrollY:false
  });

});