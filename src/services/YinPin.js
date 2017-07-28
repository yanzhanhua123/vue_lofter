"use strict";
/**
 * 数据库没有就先进行构造出JSON数据返回给视图层（View）
 *
 * */
module.exports= {
    getHeadInfo:function () {
        var imgList = [
            "src/static/img/small/yi1.png",
            "src/static/img/small/yi2.png",
        ];
        return imgList;
    },
    getMainInfo:function () {
        var imgList = [
            "src/static/img/small/yi5.png"
        ];
        return imgList;
    }
    
}