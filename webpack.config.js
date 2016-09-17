var path = require('path');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
                loaders: [
                {
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    include: [
                        __dirname
                    ],
                    loader: 'css-loader'
                },
                {
                    test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    loader: 'file-loader'
                },
                {
                    test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
                    loader: 'imports?jQuery=jquery'
                }
            ]
    },
    plugins: [
        new webpackUglifyJsPlugin({
            cacheFolder: path.resolve(__dirname, './public/webpack_cached/'),
            debug: true,
            minimize: true,
            sourceMap: false,
            output: {
                comments: false
            },
            compressor: {
                warnings: false
            }
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};