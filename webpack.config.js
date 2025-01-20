const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

module.exports = {
  mode,
  target,
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  resolve: {
    fallback: {
      fs: require.resolve("fs-extra"),
      path: require.resolve("path-browserify"),
      os: require.resolve("os"),
      assert: require.resolve("assert"),
      util: require.resolve("util"),
      stream: require.resolve("stream-browserify"),
      constants: require.resolve("constants-browserify"),
      process: require.resolve("process/browser"),
    },
    extensions: [".mjs", ".js", ".jsx", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
