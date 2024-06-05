const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: "./js/main.ts",
    mode: "development", // Set the mode to development
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        contentBase: "./dist"
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Development"
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};
