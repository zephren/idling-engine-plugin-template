const path = require("path");
const webpack = require("webpack");
const ServePlugin = require("./ServePlugin");

module.exports = (env, argv) => {
  const plugins = [];

  let outputFile = "bundle.min.js";

  if (argv.mode !== "production") {
    plugins.push(new ServePlugin());
    outputFile = "bundle.js";
  }

  return {
    entry: path.resolve(__dirname, "./src/index.tsx"),
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ["ts-loader"],
          exclude: /node_modules/,
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
    resolve: {
      extensions: ["*", ".tsx", ".ts", ".js"],
    },
    externals: {
      "idling-engine-core": "idlingEngineCore",
      "@craftjs/core": "craftjs",
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: outputFile,
    },
    plugins,
    // devServer: {
    //   contentBase: path.resolve(__dirname, './dist'),
    //   hot: true,
    // },
  };
};
