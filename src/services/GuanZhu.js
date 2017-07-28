"use strict";
/**
 * 数据库没有就先进行构造出JSON数据返回给视图层（View）
 *
 * */
module.exports = {
	getHeadInfo: function() {
		var imgList = [
			"添加关注"
		];
		return imgList;
	},
	getBoxInfo: function() {
		var imgList = [
			[{
					img1: "src/static/img/small/g01.png",
					img2: "src/static/img/small/g02.png",
					words: "被喜欢1543次"
				},
				{
					img1: "src/static/img/small/g01.png",
					img2: "src/static/img/small/g02.png",
					words: "被喜欢1543次"
				},
				{
					img1: "src/static/img/small/g01.png",
					img2: "src/static/img/small/g02.png",
					words: "被喜欢1543次"
				}
			],
			[{
					img1: "src/static/img/small/g01.png",
					img2: "src/static/img/small/g02.png",
					words: "被喜欢1543次"
				},
				{
					img1: "src/static/img/small/g01.png",
					img2: "src/static/img/small/g02.png",
					words: "被喜欢1543次"
				},
				{
					img1: "src/static/img/small/g01.png",
					img2: "src/static/img/small/g02.png",
					words: "被喜欢1543次"
				}
			],
			[{
					img1: "src/static/img/small/g01.png",
					img2: "src/static/img/small/g02.png",
					words: "被喜欢1543次"
				},
				{
					img1: "src/static/img/small/g01.png",
					img2: "src/static/img/small/g02.png",
					words: "被喜欢1543次"
				},
				{
					img1: "src/static/img/small/g01.png",
					img2: "src/static/img/small/g02.png",
					words: "被喜欢1543次"
				}
			]

		];
		return imgList;
	}

}