<template>
	<section id="list">
            <h2>摄影课堂</h2>
            <ul>
            	<li><a href="javascript:;"><img :src="getListInfo[0]"/></a></li>
            	<li><a href="javascript:;"><img :src="getListInfo[1]"/></a></li>
            	<li><a href="javascript:;"><img :src="getListInfo[2]"/></a></li>
            	<li><a href="javascript:;"><img :src="getListInfo[3]"/></a></li>
            </ul>
		</section>
</template>

<script>
	export default {
        props:["getListInfo"]
    }
</script>

<style scoped>
	#list {
  width: 100%;
  background: #FFFFFF;
  margin-top: .34rem;
  padding: 0 .4rem;
  box-sizing: border-box; }
  #list h2 {
    height: 1.3rem;
    display: flex;
    align-items: center; }
  #list ul {
    width: 100%; }
    #list ul li {
      width: 100%;
      margin-top: .3rem; }
      #list ul li a {
        width: 100%;
        display: block; }
        #list ul li a img {
          display: block;
          width: 100%;
          height: 4.3rem; }
</style>