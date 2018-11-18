const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: ['@babel/polyfill', './src/App.js'],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['*', '.js', '.json', '.jsx'],
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './dist/index.html',
      hash: true,
      inject: true,
      template: './dist/index.html',
    }),
  ],
  devtool: 'source-map',
  mode: 'development',
  serve: {
    clipboard: false,
    port: 9000,
    host: '0.0.0.0',
    content: 'dist',
  },
};
