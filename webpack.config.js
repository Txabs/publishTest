const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

const config = {
  entry: {
    'index': './src/index.ts',
    'index.min': './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist-umd'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'MyLib',
    umdNamedDefine: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      include: /\.min\.js$/,
    })],
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  }
};

module.exports = config;