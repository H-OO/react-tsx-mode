'use strict';
/**
 * 开发环境
 * @const fs 文件模块
 * @const path 路径模块
 * @const merge 配置文件合并插件
 * @const base 基础配置
 * @const appDirectory 项目根目录地址
 * @const dev 开发环境配置
 * process.cwd() 获取node命令启动路径
 */
const fs = require('fs');
const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const appDirectory = fs.realpathSync(process.cwd());
const dev = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // host: '192.168.1.2', // 域名/IP，默认localhost
    // port: '5000', // 端口，默认8080
    // open: true, // 自动开启浏览器 (shell --open)
    // openPage: 'index.html', // 默认打开页面
    contentBase: path.resolve(appDirectory, 'dist'), // devServer访问该目录的文件
    progress: true, // 构建进度条 (shell --progress)
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost', // 重定向域名
    //     secure: false, // 接受https
    //     changeOrigin: true // [默认false] changes the origin of the host header to the target URL
    //   }
    // }
  },
  output: {
    publicPath: '/' // 静态资源路径 (start /) (build ../)
  }
};
module.exports = merge(base, dev);
