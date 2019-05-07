const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/main.js',//值可以是字符串、数组或对象
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
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
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
                    use: ['css-loader', 'less-loader']
                })
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    performance: {
        hints: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new VueLoaderPlugin(),
    ],
}