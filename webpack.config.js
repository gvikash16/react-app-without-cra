const path = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HTMLWebpackPlugins({
            template: './src/index.html'
        })
    ],
    module: {
        rules:[
            {
                test: /.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    devServer: {
        hot: true
    }
}