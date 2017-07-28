<template>
     <section id="main">
			<div class="top">
				<a href="javascript:;"><img :src="getMainInfo[0]"/></a>
			</div>
		</section>
</template>

<script>
		export default {
        props:["getMainInfo"]
    }
</script>

<style scoped>
	#main {
  width: 100%;
  padding: 0.55rem 0.3rem 0;
  box-sizing: border-box;
  margin-top: 1.35rem; }
  #main .top {
    width: 100%; }
    #main .top a {
      display: block;
      width: 100%; }
      #main .top a img {
        display: block;
        width: 100%; }

</style>