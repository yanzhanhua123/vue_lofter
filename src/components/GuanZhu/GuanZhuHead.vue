<template>
	<header>
        <a href=""></a>
        <h3>{{getHeadInfo[0]}}</h3>
    </header>
</template>

<script>
		export default {
        props:["getHeadInfo"]
    }
</script>

<style>
	header {
  height: 1.3rem;
  background: #fff;
  border-bottom: 0.01rem solid #cccccc;
  position: absolute;
  z-index: 50;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start; }
  header a {
    width: .35rem;
    background: url(/vue_pro/src/static/img/small/j01.png) no-repeat center;
    background-size: .35rem auto;
    margin-left: .45rem; }
  header h3 {
    font: .5rem/1.3rem "";
    margin-left: 3.55rem; }
</style>