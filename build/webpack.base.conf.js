// nodejs 中的path模块
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
  entry: {
    index: [
      path.resolve(__dirname, '../src/main.js')
    ]
  },
  // 输出配置
  output: {
    // 输出路径是 myProject/output/static
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: [' ', '.js', '.vue'],
    alias: {
      'Vue': 'vue/dist/vue.js'
    }
  },
  module: {

    rules: [
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader?jQuery!expose-loader?$'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?presets=es2015',
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: '2048',
            name: 'image/[name].[hash].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/yyui.html'),
      inject: true
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        yyui: {
          loaders: {
            js: 'babel-loader'
          }
        }
      }
    })
  ]
}
