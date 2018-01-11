 // webpack公共配置文件，一般用于放webpack的核心四个内容


 const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');

  module.exports = {
    entry: {
      app: './src/index.js',
    },
    plugins: [
      // new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Hot Module Replacement'
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
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    }
  };