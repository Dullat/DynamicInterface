const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js',
    gameView: './src/js/gameView.js', // Separate entry point for gameview.js
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main'], // Only include main.js in index.html
    }),
    new HtmlPlugin({
      template: './src/html/gameView.html',
      filename: 'gameView.html',
      chunks: ['gameView'], // Only include gameview.js in gameview.html
    }),
  ],
  mode: 'development',
};
