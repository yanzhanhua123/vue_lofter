<template>
    <div>
    	<yin-pin-head :getHeadInfo="getHeadInfo"></yin-pin-head>
    	<yin-pin-main :getMainInfo="getMainInfo"></yin-pin-main>
    </div>
</template>


<script type='text/ecmascript-6'>
    //引入css,js

    //引入组件
    import YinPinHead from "../components/YinPin/YinPinHead.vue";
    import YinPinMain from "../components/YinPin/YinPinMain.vue";

    //引入数据
    import YinPinData from "../services/YinPin.js";

    //出口
    export default {
        components:{
            YinPinHead,
            YinPinMain,
        },
        data(){
            return{
                getHeadInfo:[],
                getMainInfo:[],
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
                this.getHeadInfo=YinPinData.getHeadInfo();
                this.getMainInfo=YinPinData.getMainInfo();
            }
        }
    }
</script>

<style scoped>
</style>

