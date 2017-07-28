<template>
    <div :class="$style.dongTai">
        <div :class="$style.title">
            <dl>
                <dt>
                    <img :src="getDongTai1_img[0]" alt="">
                    <b>慢时光</b>
                </dt>
                <dd>
                    45分钟前
                </dd>
            </dl>
        </div>
        <img :src="getDongTai1_img[1]" :class="$style.zhuTu" alt="">
        <div :class="$style.text">
            <h4>
                <b>美食</b>
                <b>没事就吃吃喝喝</b>
                <b>摄影是一种态度</b>
                <b>美食摄影</b>
            </h4>
            <div :class="$style.huDong">
                <dl :class="$style.zan">
                    <dt>
                        <img :src="getDongTai1_img[2]" alt="">
                        <img :src="getDongTai1_img[3]" alt="">
                        <img :src="getDongTai1_img[4]" alt="">
                        <img :src="getDongTai1_img[5]" alt="">

                    </dt>
                    <dd>
                        <img :src="getDongTai1_img[6]" alt="">
                    </dd>
                </dl>
                <div :class="$style.reDu">
                    <b>62 热度</b><b>1 条评论</b>
                </div>
                <div :class="$style.pinLun">
                    <b>小牛的梦</b><s> : 麻烦吗?</s>
                </div>
            </div>
        </div>

    </div>
</template>



<!--------------------------------------------------->
<script type='text/ecmascript-6'>
    export default {
        props:["getDongTai1_img"]
    }
</script>
<!--------------------------------------------------->

<style module>
    /*动态*/
    .dongTai {
        margin-bottom: .45rem; }
    .dongTai .title {
        height: 1.8rem; }
    .dongTai .title dl {
        zoom: 1; }
    .dongTai .title dl:after {
        content: "";
        clear: both;
        display: block; }
    .dongTai .title dl dt {
        float: left;
        width: 4.8rem;
        position: relative; }
    .dongTai .title dl dt img {
        width: 1.22rem;
        position: absolute;
        top: .3rem;
        left: .45rem; }
    .dongTai .title dl dt b {
        font: .42rem/.42rem "";
        position: absolute;
        top: .68rem;
        left: 2.11rem; }
    .dongTai .title dl dd {
        float: right;
        font: 0.37rem/.37rem "";
        margin: .73rem .48rem 0 0; }
    .dongTai .zhuTu {
        display: block;
        width: 100%; }
    .dongTai .text {
        padding: 0 .43rem; }
    .dongTai .text h4 {
        height: 1.47rem;
        overflow: hidden;
        border-bottom: .02rem dotted #666666;
        font: .42rem/1.47rem "";
        text-indent: .72rem;
        background: url("/Proj_Vue_lofter/src/static/img/small/i10.png") no-repeat left center;
        background-size: .36rem auto; }
    .dongTai .text h4 b {
        margin-right: .25rem; }
    .dongTai .text .huDong .zan {
        height: 1.76rem; }
    .dongTai .text .huDong .zan dt {
        float: left;
        display: flex;
        justify-content: space-between;
        margin-top: .58rem;
        width: 6.26rem; }
    .dongTai .text .huDong .zan dt img {
        width: .68rem;
        height: .59rem; }
    .dongTai .text .huDong .zan dd {
        float: right;
        margin-top: 0.6rem; }
    .dongTai .text .huDong .zan dd img {
        width: .64rem; }
    .dongTai .text .huDong .reDu {
        height: .66rem;
        font: .37rem/.66rem ""; }
    .dongTai .text .huDong .reDu b {
        margin-right: .36rem; }
    .dongTai .text .huDong .pinLun {
        height: .95rem;
        font: .38rem/.95rem ""; }
    .dongTai .text .huDong .pinLun b:nth-child(1) {
        color: #007aff; }


</style>
