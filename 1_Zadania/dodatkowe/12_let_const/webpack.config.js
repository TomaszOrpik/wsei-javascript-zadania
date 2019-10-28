const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'out.js'
  }
};

module.exports = config;