<template>
		<section id="main">
			<a href="javascript:;" class="banner"><img :src="getMainInfo1[0]"/></a>
			<a href="javascript:;" class="words">{{getMainInfo1[2]}}</a>
			<div class="end">
				<a href="javascript:;"><img :src="getMainInfo1[1]"/></a>
			</div>
		</section>
</template>

<script>
	export default {
        props:["getMainInfo1"]
    }
</script>

<style scoped>
	#main {
  width: 100%;
  height: 8.88rem;
  background: #FFFFFF;
  margin-top: 1.35rem; }
  #main img {
    width: 100%;
    display: block; }
  #main a {
    display: block; }
  #main .words {
    box-sizing: border-box;
    padding: .5rem;
    font-size: .4rem;
    color: #303030;
    line-height: .55rem; }
  #main .end {
    width: 100%;
    display: flex;
    align-items: center; }
    #main .end a {
      width: 2.2rem;
      height: .55rem;
      display: block;
      margin-left: .5rem; }
      #main .end a img {
        width: 100%;
        height: 100%;
        display: block; }
</style>