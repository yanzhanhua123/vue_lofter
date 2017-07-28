"use strict";
/**
 * 数据库没有就先进行构造出JSON数据返回给视图层（View）
 *
 * */
module.exports= {
    getHeadInfo:function () {
        var imgList = [
            "src/static/img/small/yi1.png",
            "个人应用"
        ];
        return imgList;
    },
    getMainInfo:function () {
        var imgList = [
            "src/static/img/small/ge1.png"
        ];
        return imgList;
    },
    getYingYongInfo:function () {
    	var imgList =[
    	 "我的应用",
    	 "src/static/img/small/ge2.png",
    	 "创建个人应用"
    	];
    	 return imgList;
    },
    getListInfo:function () {
    	var imgList =[
    	 "src/static/img/small/ge3.png",
    	 "src/static/img/small/ge4.png",
    	 "src/static/img/small/ge5.png",
    	 "src/static/img/small/ge6.png",
	 	 "src/static/img/small/ge7.png",
    	 "src/static/img/small/ge8.png",
    	 "src/static/img/small/ge9.png",
    	 "src/static/img/small/ge10.png"
    	];
    	 return imgList;
    }
    
    
    
}