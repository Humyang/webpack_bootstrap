var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var Clean = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        index: './js/index.js',
        about: './js/about.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "js/[name].js"
    },
    module: {
        loaders: [
         {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader!css-loader")
        }, 
        {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader","raw-loader!less-loader")
        }]
    },
    plugins: [
        new Clean(['dist']),
        new webpack.optimize.CommonsChunkPlugin('commons', 'js/commons.js',["index","about"]),
        new ExtractTextPlugin("css/[name].css"),
        new CopyWebpackPlugin([{
            from: 'index.html',
            to: 'index.html'
        },
        {
            from: 'css/bootstrap.min.css',
            to: 'css/bootstrap.min.css'
        },
        {
            from: 'css/bootstrap-theme.min.css',
            to: 'css/bootstrap-theme.min.css'
        },
        {
            from: 'js/vendor/bootstrap.min.js',
            to: 'js/vendor/bootstrap.min.js'
        },
        {
            from: 'js/vendor/jquery-1.11.2.min.js',
            to: 'js/vendor/jquery-1.11.2.min.js'
        },
        {
            from: 'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js',
            to: 'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js'
        },
        {
            from: 'fonts/',
            to: 'fonts/'
        }
        ])
    ]
}
