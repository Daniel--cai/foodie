const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CaseSensitivePathPlugin = require("case-sensitive-paths-webpack-plugin");

module.exports = {
  entry: "./src/",
  mode: "development",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: ["ts-loader"]
      },
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: ["css-loader", "sass-loader"]
      //   })
      // },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader",
        exclude: /node_modules/
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("css/styles.css"),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new CaseSensitivePathPlugin()
  ]
  //server
};
