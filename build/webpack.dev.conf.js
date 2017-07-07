var webpack = require('webpack')
var baseConfig = require('./webpack.base.conf')
var merge = require('webpack-merge')

var devClient = './build/dev-client'
Object.keys(baseConfig.entry).forEach(function (name) {
  var extras = [devClient]
  baseConfig.entry[name] = extras.concat(baseConfig.entry[name])
})

module.exports = merge(baseConfig, {
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})
