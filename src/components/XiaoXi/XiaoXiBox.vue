<template>
	<div id="box">
        <div class="title1">
            <p id="nav1">动态</p>
            <p id="nav2">消息</p>
            <p id="nav3">聊天</p>
            <b id="bar"></b>
        </div>
        <!--三个box-->
        <div class="swiper-container swiper-container1">
            <div class="swiper-wrapper">
                <!--动态-->
                <div class="swiper-slide">
                    <ul>
                        <li>
                            <a href=""><img src="img/small/x01.png" alt=""></a>
                            <div class="info">
                                <h3>慢食堂
                                    <b>喜欢了2篇</b>
                                </h3>
                                <h4>3小时前</h4>
                                <img src="img/small/x02.png" alt="">
                            </div>
                        </li>
                        <li>
                            <a href=""><img src="img/small/x01.png" alt=""></a>
                            <div class="info">
                                <h3>慢食堂
                                    <b>喜欢了2篇</b>
                                </h3>
                                <h4>3小时前</h4>
                                <img src="img/small/x02.png" alt="">
                            </div>
                        </li>
                        <li>
                            <a href=""><img src="img/small/x01.png" alt=""></a>
                            <div class="info">
                                <h3>慢食堂
                                    <b>喜欢了2篇</b>
                                </h3>
                                <h4>3小时前</h4>
                                <img src="img/small/x02.png" alt="">
                            </div>
                        </li>
                        <li>
                            <a href=""><img src="img/small/x01.png" alt=""></a>
                            <div class="info">
                                <h3>慢食堂
                                    <b>喜欢了2篇</b>
                                </h3>
                                <h4>3小时前</h4>
                                <img src="img/small/x02.png" alt="">
                            </div>
                        </li>
                        <li>
                            <a href=""><img src="img/small/x01.png" alt=""></a>
                            <div class="info">
                                <h3>慢食堂
                                    <b>喜欢了2篇</b>
                                </h3>
                                <h4>3小时前</h4>
                                <img src="img/small/x02.png" alt="">
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="swiper-slide">
                    <ul>
                        <li>
                            <a href=""><img src="img/small/x03.png" alt=""></a>
                            <div class="info">

                                <h4>新的粉丝</h4>

                            </div>
                        </li>
                        <li>
                            <a href=""><img src="img/small/x04.png" alt=""></a>
                            <div class="info">

                                <h4>喜欢</h4>

                            </div>
                        </li>
                        <li>
                            <a href=""><img src="img/small/x05.png" alt=""></a>
                            <div class="info">

                                <h4>评论</h4>

                            </div>
                        </li>
                        <li>
                            <a href=""><img src="img/small/x06.png" alt=""></a>
                            <div class="info">

                                <h4>通知</h4>

                            </div>
                        </li>

                    </ul>

                    <div id="zhuanTi">
                        <h6>专题</h6>
                        <a href="" class="pen">
                            <img src="img/small/x09.png" alt="">
                            <p>盆友,你听说过养鸡style吗?</p>
                        </a>
                        <a href="" class="more">查看更多专题</a>
                    </div>

                </div>
                <div class="swiper-slide">
                    <div class="user">
                        <div class="title">
                            <div class="left">
                                <img class="touXiang" src="img/small/g01.png" alt="">
                                <h4>
                                    <p>提香</p>
                                    <p>被喜欢1543次</p>
                                </h4>
                            </div>
                            <div class="right">
                                <p>不喜欢</p>
                                <p>关注</p>
                            </div>
                        </div>
                        <img src="img/small/g02.png" alt="" class="pics">
                    </div>
                    <div class="user">
                        <div class="title">
                            <div class="left">
                                <img class="touXiang" src="img/small/g01.png" alt="">
                                <h4>
                                    <p>提香</p>
                                    <p>被喜欢1543次</p>
                                </h4>
                            </div>
                            <div class="right">
                                <p>不喜欢</p>
                                <p>关注</p>
                            </div>
                        </div>
                        <img src="img/small/g02.png" alt="" class="pics">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
        props:["getXiaoXiInfo"]
    }
</script>

<style scoped>
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
    height: .03rem;
    background: #000;
    left: 0;
    bottom: 0; }
#box .swiper-container1 {
  width: 100%; }
  #box .swiper-container1 .swiper-slide:nth-child(1) ul {
    background: #fff; }
    #box .swiper-container1 .swiper-slide:nth-child(1) ul li {
      height: 4.16rem; }
      #box .swiper-container1 .swiper-slide:nth-child(1) ul li a {
        float: left;
        margin-top: .35rem;
        width: 1.77rem; }
        #box .swiper-container1 .swiper-slide:nth-child(1) ul li a img {
          display: block;
          width: 1.22rem;
          margin: 0 auto; }
      #box .swiper-container1 .swiper-slide:nth-child(1) ul li .info {
        width: 9rem;
        height: 100%;
        border-bottom: .01rem solid #eeeeee;
        float: left; }
        #box .swiper-container1 .swiper-slide:nth-child(1) ul li .info h3 {
          padding-top: .46rem;
          font: .38rem/.38rem ""; }
          #box .swiper-container1 .swiper-slide:nth-child(1) ul li .info h3 b {
            margin-left: 0.12rem;
            color: #666666; }
        #box .swiper-container1 .swiper-slide:nth-child(1) ul li .info h4 {
          font: .33rem/.33rem "";
          color: #666;
          padding: .32rem 0; }
        #box .swiper-container1 .swiper-slide:nth-child(1) ul li .info img {
          display: block;
          width: 2.08rem; }
  #box .swiper-container1 .swiper-slide:nth-child(2) ul {
    background: #fff; }
    #box .swiper-container1 .swiper-slide:nth-child(2) ul li {
      height: 2.1rem; }
      #box .swiper-container1 .swiper-slide:nth-child(2) ul li a {
        float: left;
        margin-top: .55rem;
        width: 2.1rem; }
        #box .swiper-container1 .swiper-slide:nth-child(2) ul li a img {
          display: block;
          width: .9rem;
          margin: 0 auto; }
      #box .swiper-container1 .swiper-slide:nth-child(2) ul li .info {
        float: right;
        width: 8.7rem;
        height: 100%;
        border-bottom: .01rem solid #eeeeee; }
        #box .swiper-container1 .swiper-slide:nth-child(2) ul li .info h4 {
          font: .45rem/.45rem "";
          padding-top: .84rem;
          background: url("../img/small/x07.png") no-repeat 8rem 0.8rem;
          background-size: .24rem auto; }
  #box .swiper-container1 .swiper-slide:nth-child(2) #zhuanTi h6 {
    height: 1.47rem;
    font: .4rem/1.47rem "";
    padding-left: 5rem;
    background: url("../img/small/x08.png") no-repeat center;
    background-size: 100% auto; }
  #box .swiper-container1 .swiper-slide:nth-child(2) #zhuanTi .pen {
    display: block;
    width: 9.92rem;
    height: 2.7rem;
    background: #fff;
    margin: 0 auto; }
    #box .swiper-container1 .swiper-slide:nth-child(2) #zhuanTi .pen img {
      float: left;
      width: 3.16rem;
      height: 2.1rem;
      margin: .3rem 0 0 .3rem; }
    #box .swiper-container1 .swiper-slide:nth-child(2) #zhuanTi .pen p {
      font: .4rem/.65rem "";
      margin: .7rem 0 0 .47rem;
      float: left;
      width: 4.6rem;
      color: #000; }
  #box .swiper-container1 .swiper-slide:nth-child(2) #zhuanTi .more {
    display: block;
    width: 9.92rem;
    height: 1.5rem;
    background: #fff;
    margin: 0 auto;
    font: .46rem/1.5rem "";
    text-align: center;
    margin-top: .3rem;
    color: #9fc905; }
  #box .swiper-container1 .swiper-slide:nth-child(3) .user {
    margin-top: .32rem; }
    #box .swiper-container1 .swiper-slide:nth-child(3) .user .title {
      background: #fff;
      height: 1.94rem;
      display: flex;
      justify-content: space-between; }
      #box .swiper-container1 .swiper-slide:nth-child(3) .user .title .left img {
        float: left;
        width: 1.37rem;
        margin: .3rem 0 0 .3rem; }
      #box .swiper-container1 .swiper-slide:nth-child(3) .user .title .left h4 {
        float: left;
        width: 3.65rem;
        margin-left: .33rem; }
        #box .swiper-container1 .swiper-slide:nth-child(3) .user .title .left h4 p:nth-child(1) {
          font: .44rem/1.24rem ""; }
        #box .swiper-container1 .swiper-slide:nth-child(3) .user .title .left h4 p:nth-child(2) {
          font: .36rem/.36rem "";
          color: #555; }
      #box .swiper-container1 .swiper-slide:nth-child(3) .user .title .right {
        float: right;
        display: flex;
        height: .8rem;
        margin: .58rem .3rem 0 0; }
        #box .swiper-container1 .swiper-slide:nth-child(3) .user .title .right p {
          width: 1.57rem;
          font: .38rem/.8rem "";
          text-align: center;
          border: .01rem solid #cccccc;
          border-radius: .4rem;
          color: #666; }
          #box .swiper-container1 .swiper-slide:nth-child(3) .user .title .right p:last-child {
            border-color: #fd3736;
            color: #fd3736;
            margin-left: .3rem; }
    #box .swiper-container1 .swiper-slide:nth-child(3) .user .pics {
      width: 100%; }
</style>