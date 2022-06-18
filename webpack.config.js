const path = require('path');

module.exports = {
  mode:'development',
  entry:  {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    },
  module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    runtimeChunk: 'single',
  },
};