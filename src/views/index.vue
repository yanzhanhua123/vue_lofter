<template>
    <div>
        <index-header :headerImg="headerImg"></index-header>
        <dong-tai1 :getDongTai1_img="getDongTai1_img"></dong-tai1>
        <tui-jian :getTuiJian_img="getTuiJian_img"></tui-jian>
    </div>
</template>


<script type='text/ecmascript-6'>
    //引入css,js
    import "../static/css/swiper.min.css";
    import "../static/js/swiper.min.js";

    //引入组件
    import IndexHeader from "../components/index/IndexHeader.vue";
    import DongTai1 from "../components/index/DongTai1.vue";
    import TuiJian from "../components/index/TuiJian.vue";

    //引入数据
    import IndexData from "../services/index.js";

    //出口
    export default {
        components:{
            IndexHeader,
            DongTai1,
            TuiJian

        },
        data(){
            return{
                headerImg:[],
                getDongTai1_img:[],
                getTuiJian_img:[]
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
                this.headerImg=IndexData.getHeaderImg();
                this.getDongTai1_img=IndexData.getDongTai1();
                this.getTuiJian_img=IndexData.getTuiJian();
            }
        }
    }
</script>

<style scoped>

</style>

