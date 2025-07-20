const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Injects styles into the DOM
          "css-loader", // Translates CSS into CommonJS
          "sass-loader", // Compiles Sass to CSS
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: "asset/resource", // Handles image files
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    static: "./dist",
    hot: true,
    port: 3000,
    open: false,
    proxy: [
      {
        context: ["/"],
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    ],
  },
  mode: "development",
};
