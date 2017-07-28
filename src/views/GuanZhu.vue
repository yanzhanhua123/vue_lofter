<template>
    <div id="guanzhubody">
    	<guan-zhu-head :getHeadInfo="getHeadInfo"></guan-zhu-head>
    	<guan-zhu-box :getBoxInfo="getBoxInfo"></guan-zhu-box>
    </div>
</template>


<script type='text/ecmascript-6'>
    //引入css,js
    import "../static/css/swiper.min.css";
    import "../static/js/swiper.min.js";
//  import "../static/js/zepto.min.js";
    

    //引入组件
    import GuanZhuHead from "../components/GuanZhu/GuanZhuHead.vue";
    import GuanZhuBox from "../components/GuanZhu/GuanZhuBox.vue";

    //引入数据
    import GuanZhuData from "../services/GuanZhu.js";

    //出口
    export default {
        components:{
            GuanZhuHead,
            GuanZhuBox,
        },
        data(){
            return{
                getHeadInfo:[],
                getBoxInfo:[],
            }
        },
        created:function () {
            this.initData();
        },
        mounted:function(){
//            console.log(this.headerImg)
        },
        methods:{
            initData:function () {
                this.getHeadInfo=GuanZhuData.getHeadInfo();
                this.getBoxInfo=GuanZhuData.getBoxInfo();
            }
        }
    }
</script>

<style scoped>
	#guanzhubody{
  margin-bottom: 1.5rem;
  padding-top: 1.3rem;
  background: #f3f5f4; }
</style>

