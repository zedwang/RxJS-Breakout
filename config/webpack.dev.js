/**
 * Created by Administrator on 2017/12/29 0029.
 */
const Webpack = require('webpack')
const config = require('./base')

config.devtool = 'inline-source-map'
config.devServer = {
    contentBase: './dist',
    hot: true
}
config.plugins.push(new Webpack.NamedModulesPlugin())
config.plugins.push(new Webpack.HotModuleReplacementPlugin())

module.exports = config