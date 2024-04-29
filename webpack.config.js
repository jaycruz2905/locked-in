const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();
const PORT = process.env.PORT;

module.exports = {
    entry: {
        src: './client/index.js',
    },
    mode:'development',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env', ['@babel/preset-react', {"runtime": "automatic"}]]
                    }
                }
            },
            {
                test: /\.s?[ac]ss$/,
                exclude: /node_modules(?!\/bootstrap)/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 8080,
        static: {
            publicPath: '/',
            directory: path.resolve(__dirname, '/dist')
        },
        proxy: [
          {
            context: ['/'],
            target: `http://localhost:${PORT}`,
            secure: false,
          },
        ],
        hot: true,
        open: true,
        historyApiFallback: true,
        liveReload: true,
    },
};