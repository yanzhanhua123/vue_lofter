<template>
    <div>
    <!--头部-->
    <header :id="$style.header">
        <a href="">
            关注
        </a>
        <a href="">
            订阅
        </a>
        <a href="">
            <img :src="headerImg[0]" alt="">
        </a>
    </header>
    <!--广告位-->
    <div :id="$style.ad">
        <img :src="headerImg[1]" alt="">
    </div>
    </div>
</template>


<!--------------------------------------------------->
<script type='text/ecmascript-6'>
    export default {
        props:["headerImg"]
    }
</script>
<!--------------------------------------------------->

<style module>



    #header {
        height: 1.24rem;
        display: flex;
        position: fixed;
        z-index: 100;
        top: 0;
        width: 100%;
        background: #fff; }
    #header a:nth-child(1) {
        width: 3.62rem;
        border-bottom: 2px solid #000000;
        font: 0.5rem/1.24rem "";
        text-align: center;
        margin-left: 1.8rem; }
    #header a:nth-child(2) {
        width: 3.62rem;
        font: 0.5rem/1.24rem "";
        text-align: center; }
    #header a:nth-child(3) {
        width: .6rem;
        height: .47rem;
        margin-left: .7rem;
        margin-top: .42rem; }
    #header a:nth-child(3) img {
        display: block;
        width: 100%; }

    #ad {
        margin-top: 1.24rem;
        height: 3.6rem;
        margin-bottom: .44rem;
        background: #f3f5f4; }
    #ad img {
        display: block;
        width: 100%; }


</style>