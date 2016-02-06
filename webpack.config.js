'use strict';

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'main.min.js',
    path: __dirname + '/public/js'
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
