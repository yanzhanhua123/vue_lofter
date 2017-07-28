<template>
	 <div class="user">
                <div class="title">
                    <div class="left">
                        <img class="touXiang" :src="SliderSonData.img1" alt="">
                        <h4>
                            <p>提香</p>
                            <p>{{SliderSonData.words}}</p>
                        </h4>
                    </div>
                    <div class="right">
                        <p>不喜欢</p>
                        <p>关注</p>
                    </div>
                </div>
            <img :src="SliderSonData.img2" alt="" class="pics">
        </div>
</template>

<script>
	export default {
        props:["SliderSonData"],
        mounted:function(){
//      	console.log(this.SliderSonData);
        }
    }
</script>

<style>
		 #box .swiper-container1 .swiper-slide .user {
    margin-top: .32rem; }
    #box .swiper-container1 .swiper-slide .user .title {
      background: #fff;
      height: 1.94rem;
      display: flex;
      justify-content: space-between; }
      #box .swiper-container1 .swiper-slide .user .title .left img {
        float: left;
        width: 1.37rem;
        margin: .3rem 0 0 .3rem; }
      #box .swiper-container1 .swiper-slide .user .title .left h4 {
        float: left;
        width: 3.65rem;
        margin-left: .33rem; }
        #box .swiper-container1 .swiper-slide .user .title .left h4 p:nth-child(1) {
          font: .44rem/1.24rem ""; }
        #box .swiper-container1 .swiper-slide .user .title .left h4 p:nth-child(2) {
          font: .36rem/.36rem "";
          color: #555; }
      #box .swiper-container1 .swiper-slide .user .title .right {
        float: right;
        display: flex;
        height: .8rem;
        margin: .58rem .3rem 0 0; }
        #box .swiper-container1 .swiper-slide .user .title .right p {
          width: 1.57rem;
          font: .38rem/.8rem "";
          text-align: center;
          border: .01rem solid #cccccc;
          border-radius: .4rem;
          color: #666; }
          #box .swiper-container1 .swiper-slide .user .title .right p:last-child {
            border-color: #fd3736;
            color: #fd3736;
            margin-left: .3rem; }
    #box .swiper-container1 .swiper-slide .user .pics {
      width: 100%; }
</style>