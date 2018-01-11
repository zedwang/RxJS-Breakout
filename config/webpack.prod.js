/**
 * Created by Administrator on 2017/12/29 0029.
 */
const Webpack = require('webpack')
const config = require('./base')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

config.devtool = 'source-map'
config.plugins.push(new UglifyJsPlugin({
    sourceMap: true
}))

module.exports = config