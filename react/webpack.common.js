const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',//值可以是字符串、数组或对象
    output: {
        path: path.resolve(__dirname, './dist'),//Webpack结果存储
        filename: '[name].[hash:8].js',
        publicPath: '/',
    },
    resolve: {
        alias: {
            assets: path.resolve(__dirname, './src/assets'),
            components: path.resolve(__dirname, './src/components'),
            common: path.resolve(__dirname, './src/common'),
            store: path.resolve(__dirname, './src/store'),
            css: path.resolve(__dirname, './src/css'),
            views: path.resolve(__dirname, './src/views'),
        },
        extensions: ['.js', '.jsx', '.jpg'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: ['./node_modules'],
              },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 50,
                        outputPath: 'assets/',
                        publicPath: '/assets',
                    },
                }],
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['style-loader', 'css-loader', 'less-loader']
                })
            },
        ]
    },
    performance: {
        hints: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
}