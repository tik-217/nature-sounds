const ESLintPlugin = require("eslint-webpack-plugin");
const common = require("./webpack.config.common");
const { Configuration } = require("webpack");
const WDS = require('webpack-dev-server');
const {merge} = require('webpack-merge');

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./index.ts",
  devServer: {
    open: false,
    hot: true,
    port: 3000,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    extensionAlias: {
     ".js": [".js", ".ts"],
     ".cjs": [".cjs", ".cts"],
     ".mjs": [".mjs", ".mts"]
    }
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new ESLintPlugin({
      configType: "flat",
    }),
  ],
});
