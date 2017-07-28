<template>
    		<section id="list">
			<h2 class="title">推荐应用</h2>
			<div class="contain">
				<img :src="getListInfo[0]"/>
				<div class="mi">
					<h3>oneice 旅行写真</h3>
					<span>摄影</span>
					<span>共1546篇文章</span>
				</div>
				<a href="javascript:;" class="btn" >查看</a>
				<a href="javascript:;" class="btn color-a" >分享</a>
			</div>
			<div class="contain">
				<img :src="getListInfo[1]"/>
				<div class="mi">
					<h3>oneice 旅行写真</h3>
					<span>摄影</span>
					<span>共1546篇文章</span>
				</div>
				<a href="javascript:;" class="btn" >查看</a>
				<a href="javascript:;" class="btn color-a">分享</a>
			</div>
			<div class="contain">
				<img :src="getListInfo[2]"/>
				<div class="mi">
					<h3>oneice 旅行写真</h3>
					<span>摄影</span>
					<span>共1546篇文章</span>
				</div>
				<a href="javascript:;" class="btn" >查看</a>
				<a href="javascript:;" class="btn color-a">分享</a>
			</div>
			<div class="contain">
				<img :src="getListInfo[3]"/>
				<div class="mi">
					<h3>oneice 旅行写真</h3>
					<span>摄影</span>
					<span>共1546篇文章</span>
				</div>
				<a href="javascript:;" class="btn" >查看</a>
				<a href="javascript:;" class="btn color-a">分享</a>
			</div>
			<div class="contain">
				<img :src="getListInfo[4]"/>
				<div class="mi">
					<h3>oneice 旅行写真</h3>
					<span>摄影</span>
					<span>共1546篇文章</span>
				</div>
				<a href="javascript:;" class="btn" >查看</a>
				<a href="javascript:;" class="btn color-a">分享</a>
			</div>
			<div class="contain">
				<img :src="getListInfo[5]"/>
				<div class="mi">
					<h3>oneice 旅行写真</h3>
					<span>摄影</span>
					<span>共1546篇文章</span>
				</div>
				<a href="javascript:;" class="btn" >查看</a>
				<a href="javascript:;" class="btn color-a">分享</a>
			</div>
			<div class="contain">
				<img :src="getListInfo[6]"/>
				<div class="mi">
					<h3>oneice 旅行写真</h3>
					<span>摄影</span>
					<span>共1546篇文章</span>
				</div>
				<a href="javascript:;" class="btn" >查看</a>
				<a href="javascript:;" class="btn color-a">分享</a>
			</div>
			<div class="contain">
				<img :src="getListInfo[7]"/>
				<div class="mi">
					<h3>oneice 旅行写真</h3>
					<span>摄影</span>
					<span>共1546篇文章</span>
				</div>
				<a href="javascript:;" class="btn" >查看</a>
				<a href="javascript:;" class="btn color-a">分享</a>
			</div>
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
  padding: 0 .3rem;
  box-sizing: border-box;
  margin-top: .3rem; }
  #list .title {
    width: 100%;
    height: 1.24rem;
    display: flex;
    align-items: center;
    font-size: .42rem;
    color: #999999;
    background: #FFFFFF;
    text-indent: .42rem; }
  #list .contain {
    display: flex;
    align-items: center;
    border-top: 1px solid #d7d7d7;
    justify-content: space-between;
    background: #FFFFFF;
    padding: 0.38rem 0.3rem 0.23rem 0.38rem; }
    #list .contain img {
      display: block;
      width: 1.68rem;
      height: 1.65rem; }
    #list .contain .mi {
      font-size: .4rem;
      flex-grow: 1;
      margin-left: .38rem;
      display: flex;
      flex-direction: column; }
      #list .contain .mi h3 {
        color: #000000; }
      #list .contain .mi span {
        line-height: .63rem;
        font-size: .32rem;
        color: #969696; }
    #list .contain a {
      display: block;
      font-size: .37rem;
      color: #FFFFFF;
      background: #9ac600;
      padding: .25rem .32rem; }
    #list .contain .btn {
      margin-left: .25rem; }
    #list .contain .color-a {
      background: #cccccc; }
</style>