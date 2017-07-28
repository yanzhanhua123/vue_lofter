<template>
      <section id="yingyong">
			<h2 class="title">{{getYingYongInfo[0]}}</h2>
			<div class="contain">
				<img :src="getYingYongInfo[1]"/>
				<p>点帝</p>
				<a href="javascript:;" class="btn">{{getYingYongInfo[2]}}</a>
			</div>
		</section>
</template>

<script>
		export default {
        props:["getYingYongInfo"]
    }
</script>

<style scoped>
	#yingyong {
  width: 100%;
  padding: 0 .3rem;
  box-sizing: border-box;
  margin-top: .3rem; }
  #yingyong .title {
    width: 100%;
    height: 1.24rem;
    display: flex;
    align-items: center;
    font-size: .42rem;
    color: #999999;
    background: #FFFFFF;
    text-indent: .42rem; }
  #yingyong .contain {
    display: flex;
    align-items: center;
    border-top: 1px solid #d7d7d7;
    justify-content: space-between;
    background: #FFFFFF;
    padding: 0.38rem 0.3rem 0.23rem 0.38rem; }
    #yingyong .contain img {
      display: block;
      width: 1.68rem;
      height: 1.65rem; }
    #yingyong .contain p {
      font-size: .4rem;
      flex-grow: 1;
      margin-left: .38rem; }
    #yingyong .contain a {
      display: block;
      font-size: .37rem;
      color: #FFFFFF;
      background: #9ac600;
      padding: .25rem .32rem; }
</style>