const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.WEBPACK_SERVE ? "development" : "production",
  devtool: process.env.WEBPACK_SERVE ? "source-map" : undefined,
  entry: path.resolve("./src/index.ts"),
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/i,
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: [
              "@babel/preset-typescript",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve("./index.html"),
    }),
  ],
};
