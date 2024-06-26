const ESLintPlugin = require("eslint-webpack-plugin");
const commonConfig = require("./webpack.config.common");
const { merge } = require("webpack-merge");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    open: false,
    hot: true,
    port: 3000,
  },
  plugins: [
    new ESLintPlugin({
      configType: "flat",
    }),
  ],
});
