const path = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
// const mode = process.env.NODE_ENV 
module.exports = {
    entry: './src/index.js',
    // mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'images/[hash][ext][query]'
    },
    plugins: [
        new HTMLWebpackPlugins({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin(),
        new ReactRefreshWebpackPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /(png|jpe?g|svg|gif)$/i,
                type: 'asset'
            },
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: "automatic" }]],
                        plugins:['react-refresh/babel']
                    }
                }
            },
            {
                test: /.s([ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
    }
}