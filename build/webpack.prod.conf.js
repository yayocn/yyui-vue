var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var webpack = require('webpack')
// 引入基本配置
var config = require('./webpack.config')

config.plugins = [
  // 提取css为单文件
  new ExtractTextPlugin('../[name].[contenthash].css'),

  new HtmlWebpackPlugin({
    filename: '../index.html',
    template: path.resolve(__dirname, '../src/yyui.html'),
    inject: true
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      vue: {
        loaders: {
          css: ExtractTextPlugin.extract('css')
        }
      }
    }
  })
]

module.exports = config
