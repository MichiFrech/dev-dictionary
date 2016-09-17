var webpack = require('webpack');

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
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};