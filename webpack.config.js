'use strict'

const path = require('path')

module.exports = {
  entry: path.resolve('.', 'src', 'js', 'main.js'),
  output: {
    filename: 'main.min.js',
    path: path.resolve('.', 'public', 'js')
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
}
