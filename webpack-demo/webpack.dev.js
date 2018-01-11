
// 开发环境--可以配置我们的调试以及其他的插件

// webpack-merge 可以是专门适用于合并webpack的配置文件的插件
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
module.exports = merge(common, {
	devtool: 'source-map', // 开发环境使用源代码
	// 使用热更新插件
	plugins:[
	 new webpack.NamedModulesPlugin(),//插件会引起模块的相对路径
     new webpack.HotModuleReplacementPlugin() // 开启全局热更新
	]
})
