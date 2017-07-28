<template>
	<section id="main">
			<img :src="getMainInfo[0]"/>
		</section>
</template>

<script>
	export default {
        props:["getMainInfo"]
    }
</script>

<style>
#main {
  width: 100%;
  margin-top: 3rem; }
  #main img {
    width: 100%; }
</style>