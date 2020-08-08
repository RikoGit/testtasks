const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { join } = require("path");

const isDev = process.env.NODE_ENV === "development";

const rootDir = join(__dirname, "..");
const staticDir = join(rootDir, ".");

const testtask1 = {
  entry: "./testtask1/index.js",
  mode: isDev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  optimization: {
    noEmitOnErrors: true,
  },
  output: {
    filename: "index.js",
    path: join(staticDir, "testtask1/build"),
    publicPath: "/",
  },
};

const testtask2 = {
  entry: "./testtask2/index.js",
  mode: isDev ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  optimization: {
    noEmitOnErrors: true,
  },
  output: {
    filename: "index.js",
    path: join(staticDir, "testtask2/build"),
    publicPath: "/",
  },
};

module.exports = [testtask1, testtask2];
