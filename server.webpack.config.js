var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'compiled-server.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      // {
      //   test:/\.s?css$/,
      //   loader: 'css-loader!sass-loader'
      // }
    ]
  },
  target: 'node'
};
