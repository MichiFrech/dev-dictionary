var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'dist/bundle.[hash].js'
    },
    module: {
                loaders: [
                {
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    loader: 'file-loader?name=dist/[hash].[ext]'
                },
                {
                    test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
                    loader: 'imports?jQuery=jquery'
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                },
                {
                    test: /\.jsx?$/,         // Match both .js and .jsx files
                    exclude: /node_modules/,
                    loader: "babel",
                    query:
                    {
                        presets:['react']
                    }
                }
            ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './dist/index.html'
        }),
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};