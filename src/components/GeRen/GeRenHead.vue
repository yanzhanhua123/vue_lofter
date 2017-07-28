<template>
      <header id="head">
				<a href="javascript:;" class="back">
					<img :src="getHeadInfo[0]"/>
					<p class="mes">{{getHeadInfo[1]}}</p>
				</a>
		</header>
</template>

<script>
		export default {
        props:["getHeadInfo"]
    }
</script>

<style scoped>
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
    #head .back img {
      width: .35rem;
      height: .66rem;
      display: block;
      margin-left: .4rem; }
    #head .back .mes {
      flex-grow: 1;
      font-size: .45rem;
      color: #000000;
      line-height: 1rem;
      text-align: center; }
</style>