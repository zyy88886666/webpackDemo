  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');
  const UglifyJSPlugin = require('uglifyjs-webpack-plugin');  // 此插件是哪个删除未引用代码(dead code)的压缩工具
  const webpack = require('webpack');

  module.exports = {
    entry: {
      // app: './src/index.js',
      async: './src/async.js',
      // another: '@/another-module.js'  // 重复使用lodash模块依赖的js
      // print: './src/print.js'
    },
    // 模块的处理方案
    resolve:{
    // 扩展名 --默认解析扩展路径，设置完成后再引入文件后可以节约后缀名 如.js .css .sass
      extensions: ['.js', '.vue', '.json'],
      // 设置别名
      alias:{
        // @ 是src的别名
        '@': path.join(__dirname, 'src')
      }
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      // 重新生成index.html，并且实现引用bundle.js
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement'
      }),
      // 打包压缩的文件
      new UglifyJSPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(), // 表示全局开启代码热替换
      // 提取chunk中重复引入的模块代码
      new webpack.optimize.CommonsChunkPlugin({
       name: 'common'
      })
    ],
    module: {
      rules: [
        {
          // webpack 根据正则表达式，来确定应该查找那些文件，并将其提供给指定的loader。
          test: /\.css$/,
          use: [
          'style-loader',
          'css-loader'
          ]
        }
        
      ]
    },
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    }
  };