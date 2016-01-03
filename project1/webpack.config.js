var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var Clean = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        hot: 'webpack/hot/dev-server',
        server: 'webpack-dev-server/client?http://localhost:8080',
        index: './js/index.js'
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
        new Clean(['dist', 'build']),
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
            from: 'fonts/',
            to: 'fonts/'
        }
        ])
    ]
}
