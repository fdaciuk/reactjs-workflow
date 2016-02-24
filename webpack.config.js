'use strict';

const path = require('path');

module.exports = {
  entry: path.join('.', 'src', 'js', 'main.js'),
  output: {
    filename: 'main.min.js',
    path: path.join(__dirname, 'public', 'js')
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
};
