/*
 * @Author: Xhf
 * @Date:   2017-11-20 12:25:52
 * @Last Modified time: 2017-11-20 12:25:52
 */

'use strict';
var path = require('path')
var webpack = require('webpack');
console.log(path.resolve(__dirname, './src/components'))
// css 单独打包，使用该插件后就不需要配置style-loader了
// 本来是内联在最终的网页里，现在通过外联方式，可以在/dist文件夹下找到单独的css文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: './src/main.js', // 唯一的入口文件--react+redux
        vendor: ['react'] // 这里是依赖的库文件配置，和CommonsChunkPlugin配合使用可以单独打包
    },
    output: {
        path: './dist', //打包后的文件存放的地方
        filename: 'reduxBundle.js',
        publicPath: 'http://localhost:8080/dist/' //启动本地服务后的根目录
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        //root: './',
        alias: {
      		'root':path.resolve(__dirname, '../xhfReduxDemo'), 
      		'asset': path.resolve('asset'),
            '@': path.resolve('src'),
      		'components': path.resolve(__dirname, './src/components'),
      		'Redux': path.resolve(__dirname, './src/redux'),
        }  
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel',
            // 可以单独在当前目录下配置.babelrc，也可以在这里配置
            query: {
                 presets: ['es2015', 'react']
            },
            // 排除 node_modules 下不需要转换的文件，可以加快编译
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style", "css")
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style", "css!sass")
        }, {
            test: /\.less$/,
            loader: "style!css!less"
	    },
        {
            test: /\.(png|jpg|gif)$/,
            loader: 'url?limit=8192&name=asset/images/[hash:8].[name].[ext]' // 打包在dist/assets/images/下
        }]
    },
    plugins: [
        new ExtractTextPlugin('main.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        })
    ]
};