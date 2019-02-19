/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
  entry: {
    main: ['@babel/polyfill', './src/index.js'],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(jsx|js)?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(jsx|js)?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: [
          path.resolve('src'),
          path.resolve(__dirname, 'node_modules/bootstrap/dist/css/'),
          path.resolve(__dirname, 'node_modules/typeface-roboto/'),
        ],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)(\?.+)?$/,
        include: [
          path.resolve('src'),
          path.resolve('node_modules/@fortawesome/'),
          path.resolve(__dirname, 'node_modules/typeface-roboto/'),
        ],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  target: 'web',
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000,
  },
  optimization: {
    splitChunks: {
      maxSize: 409600,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          enforce: true,
          priority: 1,
        },
        common: {
          name: 'common',
          chunks: 'all',
          enforce: true,
          priority: 0,
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React-Starter-Kit',
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new FileManagerPlugin({
      onStart: {
        delete: [
          './dist/',
        ],
      },
    }),
  ],
};
