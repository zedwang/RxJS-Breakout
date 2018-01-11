/**
 * Created by Administrator on 2017/12/29 0029.
 */
const path = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {

    entry: {
        "app": "./src/index.js"
    },

    output: {
        filename: '[name].boundle.js',
        path: path.resolve(__dirname,'../dist'),
        publicPath:'/'
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader","css-loader","sass-loader"]
                
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: ['babel-preset-env']
                    }
                  }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('../dist'),
        new HtmlWebpackPlugin({
            title:'A game intro to RxJS',
            template: 'src/index.html'
        })
    ]
}