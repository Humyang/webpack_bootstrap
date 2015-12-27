var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        // hot: 'webpack/hot/dev-server',
        // server: 'webpack-dev-server/client?http://localhost:8080',
        index: './js/main.js'
            // ,
            // post: "./post",
            // about: "./about"
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js"
    },
    module: {
        loaders: [
   v      {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader!css-loader")
        }, 
        {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader","raw-loader!less-loader")
        }]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new CopyWebpackPlugin([{
            from: 'index.html',
            to: 'index.html'
        }
        ])
    ]
}
