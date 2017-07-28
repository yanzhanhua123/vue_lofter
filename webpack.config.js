"use strict"
const path = require("path");
const webpack = require("webpack");

module.exports = {

    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry: [path.resolve(__dirname, "src/main")],
    output: {
        filename: "main.bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        alias: {
            vue: "vue/dist/vue.js"
        }
    },
    module: {
        rules: [
            {test: /\.css$/, loader: "style-loader!css-loader", exclude: /node_modules/},

            {
                test: /\.vue$/,
                loader: "vue-loader",
                exclude: /node_modules/,
                options: {
                    cssModules: {
                        localIdentName: '[name]-[local]-[hash:base64:5]',
                        camelCase: true
                    }
                }
            },

            {test: /\.(eot|svg|ttf|woff)$/, loader: "url-loader"},
            {test: /\.(gif|jpg|png|jpeg)$/, loader: "url-loader"},
            {test: /\.js$/, loader: "babel-loader", query: {presets: ["es2015", "stage-2"]}, exclude: /node_modules/},
            {
		        // 得到jquery模块的绝对路径
		        test: require.resolve('jquery'),
		        // 将jquery绑定为window.jQuery 和 window.$
		        loader: 'expose-loader?jQuery!expose-loader?$'
            }
        ]
    }
}

