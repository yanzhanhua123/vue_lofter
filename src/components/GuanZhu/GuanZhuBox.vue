<template>
	  <div id="box">
        <div class="title1">
            <p id="nav1">猜你喜欢</p>
            <p id="nav2">同城热门</p>
            <p id="nav3">微博好友</p>
            <b id="bar"></b>
        </div>
        <!--三个box-->
        <div class="swiper-container swiper-container1">
            <div class="swiper-wrapper">
            	<box-slider key = index :boxSliderData="n" v-for = "(n,index) in getBoxInfo"></box-slider>
            </div>
        </div>
    </div>

</template>

<script>
//	引入子组件
import BoxSlider from "./BoxSlider.vue";//slider组件

	export default {
        props:["getBoxInfo"],
//      注册
        components: {
        	BoxSlider
        },
        mounted:function(){
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
        }
    }
</script>

<style>
	#box .title1 {
  background: #fff;
  height: 1.2rem;
  display: flex;
  justify-content: space-around;
  position: relative; }
  #box .title1 > p {
    width: 33.3%;
    font: .42rem/1.2rem "";
    text-align: center; }
  #box .title1 > b {
    position: absolute;
    width: 3.6rem;
    height: .06rem;
    background: #007aff;
    left: 0;
    bottom: 0; }
#box .swiper-container1 {
  width: 100%; }
</style>