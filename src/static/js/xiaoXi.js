//轮播图------------------------------------

var mySwiper1 = new Swiper('.swiper-container1', {
    resistanceRatio: 0,
    onSliderMove: function (swiper) {
        var x = swiper.translate;

        var y = -(x / 100) + "rem";

        document.getElementById("bar").style.left = y;


    },
    onSetTransition: function (swiper, transiton) {
        var x = swiper.translate;
        var y = -(x / 100) + "rem";
        document.getElementById("bar").style.left = y;
    },
    /* onTransitionEnd: function(swiper,transiton){
     var x = swiper.translate;
     var y = -(x / 100) + "rem";
     document.getElementById("bar").style.left = y;
     },*/
    /*onTouchEnd: function (swiper) {
        if (swiper.realIndex == 0) {
            document.getElementById("bar").style.left="0";
            return;
        }
        ;
        if (swiper.realIndex == 1) {
            document.getElementById("bar").style.left = "3.6rem";
            return;
        }
        ;
        if (swiper.realIndex == 2) {
            document.getElementById("bar").style.left = "7.2rem";
            return;
        }
    }*/

});

$("#nav1").on("click",function () {
    mySwiper1.slideTo(0, 300, false);//切换到第一个slide，速度为1秒
});
$("#nav2").on("click",function () {
    mySwiper1.slideTo(1, 300, false);//切换到第一个slide，速度为1秒
});
$("#nav3").on("click",function () {
    mySwiper1.slideTo(2, 300, false);//切换到第一个slide，速度为1秒
});