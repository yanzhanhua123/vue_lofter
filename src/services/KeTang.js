"use strict";
/**
 * 数据库没有就先进行构造出JSON数据返回给视图层（View）
 *
 * */
module.exports= {
    getHeadIcon:function () {
        var imgList = [
            "src/static/img/small/yi1.png",
            "src/static/img/small/ke1.png",
            "src/static/img/small/ke2.png",
        ];
        return imgList;
    },
    getMainInfo:function () {
        var imgList = [
            "src/static/img/small/ke3.png",
            "src/static/img/small/ke4.png",
            "富士X-E2已经是很久很久以前的一款产品了，但在2016年年初，富士发布了后续产品：富士X-E2s，数码相机日新月异的发展，这款机器的性能也被竞品其他产品所超越；近日根据fujirumors网站消息，富士即将在今年发布最新款的X-E系列相机：X-E3。"
        ];
        return imgList;
    },
    getListInfo:function () {
    	var imgList =[
    	 "src/static/img/small/ke5.png",
    	 "src/static/img/small/ke6.png",
    	 "src/static/img/small/ke7.png",
    	 "src/static/img/small/ke8.png",
    	];
    	 return imgList;
    }
}    