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
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  resolve: {
    extensions: [' ', '.js', '.vue'],
    alias: {
      'Vue': 'vue/dist/vue.js'
    }
  },
  devtool: 'source-map',
  module: {

    rules: [
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
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader']
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