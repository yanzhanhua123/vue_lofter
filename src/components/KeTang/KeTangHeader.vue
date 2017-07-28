<template>
			<header id="head">
				<a href="javascript:;" class="back">
					<img :src="getHeadIcon[0]" class="img1"/>
					<img :src="getHeadIcon[1]" class="img2"/>
					<p class="mes">摄影课堂</p>
					<img :src="getHeadIcon[2]" class="img3" />
				</a>
		</header>
</template>

<script>
	export default {
        props:["getHeadIcon"]
    }
</script>

<style scoped>
	body, html {background: #f3f5f4;}
	#head {
  width: 100%;
  height: 1.34rem;
  background: #ffffff;
  position: fixed;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #dddddd; }
  #head .back {
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: flex-start;
    align-items: center; }
    #head .back .img1 {
      width: .35rem;
      height: .66rem;
      display: block;
      margin-left: .4rem; }
    #head .back .img2 {
      width: .58rem;
      height: .62rem;
      display: block;
      margin-left: .56rem; }
    #head .back .img3 {
      width: .24rem;
      height: .78rem;
      display: block;
      margin-right: .54rem; }
    #head .back .mes {
      flex-grow: 1;
      font-size: .45rem;
      color: #000000;
      line-height: 1rem;
      text-align: center; }
</style>