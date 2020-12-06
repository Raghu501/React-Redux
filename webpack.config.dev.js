const webpack = require("webpack");//common js style of node since node doesnot support es6 style
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
process.env.NODE_ENV = "development";

module.exports = {
    //    mode: "development",
    //  target: "web",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "index_bundle.js"
    },
    devServer: {
        hot: true,
        stats: "minimal",
        overlay: true,
        historyApiFallback: true,
        disableHostCheck: true,
        headers: { "Access-control-Allow-Origin": "*" },
        https: false,
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.API_URL": JSON.stringify("http://localhost:3001")
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["css-loader", "style-loader"]
            }
        ]
    }
}
