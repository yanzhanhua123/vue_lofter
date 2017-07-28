<template>
    <div id="tuiJian">
        <h4>你可能感兴趣的人</h4>
        <div class="swiper-container swiper-container1">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img :src="getTuiJian_img[0]" alt="" class="touXian">
                    <h4>Grant Gustin</h4>
                    <h5>被喜欢1235次</h5>
                    <div class="pic">
                        <img :src="getTuiJian_img[1]" alt="">
                        <img :src="getTuiJian_img[2]" alt="">
                        <img :src="getTuiJian_img[3]" alt="">

                    </div>
                    <p>关注</p>
                </div>
                <div class="swiper-slide">
                    <img :src="getTuiJian_img[0]" alt="" class="touXian">
                    <h4>Grant Gustin</h4>
                    <h5>被喜欢1235次</h5>
                    <div class="pic">
                        <img :src="getTuiJian_img[1]" alt="">
                        <img :src="getTuiJian_img[2]" alt="">
                        <img :src="getTuiJian_img[3]" alt="">

                    </div>
                    <p>关注</p>
                </div>
                <div class="swiper-slide">
                    <img :src="getTuiJian_img[0]" alt="" class="touXian">
                    <h4>Grant Gustin</h4>
                    <h5>被喜欢1235次</h5>
                    <div class="pic">
                        <img :src="getTuiJian_img[1]" alt="">
                        <img :src="getTuiJian_img[2]" alt="">
                        <img :src="getTuiJian_img[3]" alt="">

                    </div>
                    <p>关注</p>
                </div>

            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>


    </div>
</template>



<!--------------------------------------------------->
<script type='text/ecmascript-6'>
    export default {
        props:["getTuiJian_img"],
        mounted:function(){
            //轮播图------------------------------------
            var mySwiper = new Swiper ('.swiper-container1', {
                slidesPerView : "auto",
                // slidesOffsetAfter : 1,
            });

        },
    }
</script>
<!--------------------------------------------------->

<style scoped>
    /*可能感兴趣的人*/
    #tuiJian {
        height: 10.08rem;
        background: #f3f5f4;
        padding-left: .42rem; }
    #tuiJian > h4 {
        font: .38rem/1.38rem "";
        height: 1.38rem;
        color: #666666; }
    #tuiJian .swiper-container1 {
        height: 8.19rem; }
    #tuiJian .swiper-container1 .swiper-slide {
        margin-right: .41rem;
        background: #fff;
        width: 7.93rem;
        padding-top: .22rem; }
    #tuiJian .swiper-container1 .swiper-slide .touXian {
        display: block;
        width: 1.54rem;
        margin: 0 auto; }
    #tuiJian .swiper-container1 .swiper-slide h4 {
        font: .38rem/.38rem "";
        text-align: center;
        font-weight: 600;
        margin: .6rem 0 .3rem; }
    #tuiJian .swiper-container1 .swiper-slide h5 {
        font: .33rem/.33rem "";
        text-align: center;
        color: #666;
        margin: .3rem 0 .3rem; }
    #tuiJian .swiper-container1 .swiper-slide .pic {
        display: flex;
        justify-content: space-between; }
    #tuiJian .swiper-container1 .swiper-slide .pic img {
        width: 2.65rem;
        height: 2.65rem; }
    #tuiJian .swiper-container1 .swiper-slide p {
        width: 2.1rem;
        height: .9rem;
        border: 0.02rem solid #fd3736;
        border-radius: 0.45rem;
        margin: .45rem auto 0;
        text-align: center;
        font: .38rem/.9rem "";
        color: #fd3736; }

</style>
