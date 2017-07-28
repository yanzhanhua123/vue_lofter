<template>
    <div>
        <!--<index-header :headerImg="headerImg"></index-header>
        <dong-tai1 :getDongTai1_img="getDongTai1_img"></dong-tai1>
        <tui-jian :getTuiJian_img="getTuiJian_img"></tui-jian>-->
        <ke-tang-header :getHeadIcon="getHeadIcon"></ke-tang-header>
        <ke-tang-main :getMainInfo1="getMainInfo"></ke-tang-main>
        <ke-tang-list :getListInfo="getListInfo"></ke-tang-list>
    </div>
</template>


<script type='text/ecmascript-6'>
    //引入css,js
//  import "../static/css/swiper.min.css";
//  import "../static/js/swiper.min.js";

    //引入组件
//  import IndexHeader from "../components/index/IndexHeader.vue";
//  import DongTai1 from "../components/index/DongTai1.vue";
//  import TuiJian from "../components/index/TuiJian.vue";
    import KeTangHeader from "../components/KeTang/KeTangHeader.vue";
    import KeTangMain from "../components/KeTang/KeTangMain.vue";
    import KeTangList from "../components/KeTang/KeTangList.vue";
    
    //引入数据
    import KeTangData from "../services/KeTang.js";
    

    //出口
    export default {
        components:{
            KeTangHeader,
            KeTangMain,
            KeTangList
        },
        data(){
            return{
            	getHeadIcon :[],
            	getMainInfo:[],
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
                this.getHeadIcon=KeTangData.getHeadIcon();
                this.getMainInfo=KeTangData.getMainInfo();
                this.getListInfo=KeTangData.getListInfo();
            }
        }
    }
</script>

<style scoped>
	
</style>

