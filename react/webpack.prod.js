const webpack = require('webpack');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

module.exports = merge(common, {
    // stats: 'errors-only',  //  是否有显示文字输出
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin("styles/[name].[chunkhash:8].css"),
        new webpack.optimize.CommonsChunkPlugin('js/common.js'),
        new webpack.DefinePlugin({
            "process.env": require('./config/prod.env.js')
        }),
        new ParallelUglifyPlugin({
            uglifyJS: {
                output: {
                    beautify: false,
                    comments: false
                },
                compress: {
                    warnings: false,
                    drop_console: true,
                    collapse_vars: false,
                    reduce_vars: true
                }
            }
        }),
    ]
});