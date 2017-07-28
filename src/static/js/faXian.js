//导航栏轮播图------------------------------------
var nav = new Swiper('.nav', {
    slidesPerView : 'auto',
    slidesOffsetAfter : 430,
});

//页面大轮播图
var container = new Swiper('.container', {
    onSlideChangeEnd: function (swiper) {
        switch(swiper.realIndex)
        {
            case 0:
                $(".nav .swiper-slide").css({border:0});
                $(".nav .swiper-slide:nth-child(1)").css({"border-bottom": ".01rem solid #000"});

                break;
            case 1:
                $(".nav .swiper-slide").css({border:0});
                $(".nav .swiper-slide:nth-child(2)").css({"border-bottom": ".01rem solid #000"});
                break;
            case 2:
                $(".nav .swiper-slide").css({border:0});
                $(".nav .swiper-slide:nth-child(3)").css({"border-bottom": ".01rem solid #000"});
                nav.setWrapperTransition(500);
                nav.setWrapperTranslate(0);
                break;
            case 3:
                $(".nav .swiper-slide").css({border:0});
                $(".nav .swiper-slide:nth-child(4)").css({"border-bottom": ".01rem solid #000"});
                nav.setWrapperTransition(500);
                nav.setWrapperTranslate(-80);
                break;
            case 4:
                $(".nav .swiper-slide").css({border:0});
                $(".nav .swiper-slide:nth-child(5)").css({"border-bottom": ".01rem solid #000"});
                nav.setWrapperTransition(500);
                nav.setWrapperTranslate(-160);
                break;
            default:
                break;
        };

    },
});
//第二个页面两个轮播图
var s_slider1 = new Swiper('.s_slider1', {
    autoplay : 3000,
    pagination : '.swiper-pagination',
});
var s_slider2 = new Swiper('.s_slider2', {
    slidesPerView : 'auto',
    slidesOffsetAfter : 190,
});





//点击导航栏跳转页面
$(".nav .swiper-wrapper").on("click",".swiper-slide",function () {
    var index_num=$(this).index();
    switch(index_num)
    {
        case 0:
            container.slideTo(0, 300, false);
            $(".nav .swiper-slide").css({border:0});
            $(this).css({"border-bottom": ".01rem solid #000"});
            break;
        case 1:
            container.slideTo(1, 300, false);
            $(".nav .swiper-slide").css({border:0});
            $(this).css({"border-bottom": ".01rem solid #000"});
            break;
        case 2:
            container.slideTo(2, 300, false);
            $(".nav .swiper-slide").css({border:0});
            $(this).css({"border-bottom": ".01rem solid #000"});
            break;
        case 3:
            container.slideTo(3, 300, false);
            $(".nav .swiper-slide").css({border:0});
            $(this).css({"border-bottom": ".01rem solid #000"});
            break;
        case 4:
            container.slideTo(4, 300, false);
            $(".nav .swiper-slide").css({border:0});
            $(this).css({"border-bottom": ".01rem solid #000"});
            break;
        default:
            break;
    };
});

