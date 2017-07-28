<template>
    <div id="GeRen">
    	<ge-ren-head :getHeadInfo="getHeadInfo"></ge-ren-head>
    	<ge-ren-main :getMainInfo="getMainInfo"></ge-ren-main>
    	<ge-ren-ying-yong :getYingYongInfo="getYingYongInfo"></ge-ren-ying-yong>
    	<ge-ren-list :getListInfo="getListInfo"></ge-ren-list>
    </div>
</template>


<script type='text/ecmascript-6'>
    //引入css,js

    //引入组件
    import GeRenHead from "../components/GeRen/GeRenHead.vue";
    import GeRenMain from "../components/GeRen/GeRenMain.vue";
    import GeRenYingYong from "../components/GeRen/GeRenYingYong.vue";
    import GeRenList from "../components/GeRen/GeRenList.vue";

    //引入数据
    import GeRenData from "../services/GeRen.js";

    //出口
    export default {
        components:{
            GeRenHead,
            GeRenMain,
            GeRenYingYong,
            GeRenList
        },
        data(){
            return{
                getHeadInfo:[],
                getMainInfo:[],
                getYingYongInfo:[],
                getListInfo:[]
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
                this.getHeadInfo=GeRenData.getHeadInfo();
                this.getMainInfo=GeRenData.getMainInfo();
                this.getYingYongInfo=GeRenData.getYingYongInfo();
                this.getListInfo=GeRenData.getListInfo();
            }
        }
    }
</script>

<style scoped>
#GeRen{background: #f3f5f4;}
</style>

