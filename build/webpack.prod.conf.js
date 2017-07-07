var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var merge = require('webpack-merge')
// 引入基本配置
var baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourcemap: true
            }
          }]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              sourcemap: false
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourcemap: false
            }
          }]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].[contenthash].css')
  ]
})
