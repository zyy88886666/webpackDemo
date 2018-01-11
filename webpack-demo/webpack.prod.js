 const merge = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const common = require('./webpack.common.js');
 const webpack = require('webpack');
 module.exports = merge(common, {
   plugins: [

   	 // 精简代码插件
     new UglifyJSPlugin(),
      // 提取chunk中重复引入的模块代码
      new webpack.optimize.CommonsChunkPlugin({
       name: 'common'
      })
   ]
 });