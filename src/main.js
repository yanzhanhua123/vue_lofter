"use strict";
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

//页面组件引用
//import Index from "./views/Index.vue"; //首页
//import KeTang from "./views/KeTang.vue";//课堂
//import GeRen from "./views/GeRen.vue";//个人
//import YinPin from "./views/YinPin.vue";//印品
import GuanZhu from "./views/GuanZhu.vue";//关注
//公共样式和CSS文件
import "./static/js/rem.js";
import "./static/css/public.css";
import $ from "jquery";


//
Vue.use(VueRouter);
const router = new VueRouter({
    routes:[
        {path:"/",component:GuanZhu}
       /* {path:"/bill",component:Bill},
        {path:"/huodong",component:Huodong}*/

    ]
});

new Vue({
    el: "#app",
    router,
    render: h=> {
        return h(App);
    }
});