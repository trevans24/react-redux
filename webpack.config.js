'use strict'
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // file for webpack to watch
  entry: './src/index.js',

  // where to output the bundled js
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  // loaders or compilers
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react'],
            },
          },
        ],
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }, {
        test: /\.jpeg$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.jpg$/,
        loader: 'file-loader',
        query: {
          name: 'src/assets/img/[name].[ext]'
        },
      },
    ],
  },
  // devServer: {
  //   historyApiFallback: true,
  //   host: '0.0.0.0',
  //   port: 3000
  // },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html', filename: 'index.html' })],
};
