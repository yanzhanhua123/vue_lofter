<template>
    <div class="swiper-slide">
    	<slider-son key = index :SliderSonData="n" v-for = "(n,index) in boxSliderData"></slider-son>
    </div>
</template>

<script>
	//	引入子组件
import SliderSon from "./SliderSon.vue";//SliderSon组件
	
	
	export default {
        props:["boxSliderData"],
        components: {
        	SliderSon
        }
    }
</script>

<style>
</style>