// https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr
var path = require('path');
const SRC_DIR = path.resolve(__dirname, 'web', 'src');
const DIST_DIR = path.resolve(__dirname, 'web', 'public', 'dist');

module.exports = {
  entry: path.resolve(SRC_DIR, 'index.jsx'), //'./app/index.js',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader'
      }
    ]
  }
};