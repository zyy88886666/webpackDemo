const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.dev.js');
 // webpack-dev-server的配置文件
const options = {
  contentBase: './dist',
  publicPath: config.output.publicPath,
  hot: true, // 启动热更新
  inline: true, // 内联模式
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});