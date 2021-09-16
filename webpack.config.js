const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// CREATE TWO MODE WEBPACK: "DEV" - "PROD"

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/js/index.js"),
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,    
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [  
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },    
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
};
