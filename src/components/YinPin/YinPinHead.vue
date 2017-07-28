<template>
		<header id="head">
			<div class="top">
				<a href="javascript:;" class="back"><img :src="getHeadInfo[0]"/><p class="mes">乐乎印品</p></a>
			</div>
			<div class="bot">
				<a href="javascript:;" class="border-a"><img :src="getHeadInfo[1]"/><p class="p1">优惠券</p></a>
				<a href="javascript:;"><img :src="getHeadInfo[1]"/><p class="p1">优惠券</p></a>
			</div>
		</header>
</template>

<script>
		export default {
        props:["getHeadInfo"]
    }
</script>

<style>
	#head {
  width: 100%;
  height: 3rem;
  background: #ffffff;
  position: fixed;
  top: 0;
  z-index: 100; }
  #head .top {
    display: block;
    width: 100%;
    height: 1rem; }
    #head .top .back {
      width: 100%;
      display: flex;
      height: 100%;
      justify-content: flex-start; }
      #head .top .back img {
        width: .35rem;
        height: .66rem;
        display: block;
        margin-top: .2rem;
        margin-left: .45rem; }
      #head .top .back .mes {
        flex-grow: 1;
        font-size: .45rem;
        color: #000000;
        line-height: 1rem;
        text-align: center; }
  #head .bot {
    width: 100%;
    height: 2rem;
    display: flex; }
    #head .bot a {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center; }
      #head .bot a img {
        display: block;
        width: .8rem;
        height: .8rem;
        margin-right: .35rem; }
      #head .bot a .p1 {
        font-size: .4rem;
        color: #000000; }
    #head .bot .border-a {
      background: url(/vue_pro/src/static/img/small/yi4.png) no-repeat center right;
      background-size: 3px .54rem; }

</style>