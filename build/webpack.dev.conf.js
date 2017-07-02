var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var config = require('./webpack.config')

config.output.publicPath = '/';

config.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
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
            },
        }
    })
];

// var devClient = 'webpack-hot-middleware/client';
var devClient = './build/dev-client';
Object.keys(config.entry).forEach(function (name, i) {
    var extras = [devClient]
    config.entry[name] = extras.concat(config.entry[name])
})


module.exports = config;