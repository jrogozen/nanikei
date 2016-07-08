var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  name: 'client side rendering',
  context: path.resolve(__dirname, '..'),
  target: 'web',
  devtool: 'cheap-eval-source-map',
  alias: {
    'nanikei': __dirname, // doesn't work
    'config': 'config',
    'app': 'app',
    'server': 'server',
    'scss': 'scss',
    'images': 'images'
  },
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, '..', 'app')
  ],
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEV__: process.env.NODE_ENV === 'development'
    }),
    new ExtractTextPlugin('style.css'), 
  ],
  resolve: {
    root: path.resolve(__dirname, '..'),
    extensions: ['', '.js', '.scss', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        // include: path.resolve(__dirname, '..')
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        loader:  ExtractTextPlugin.extract('style-loader', 'css!postcss!sass?sourceMap'),
        include: path.resolve(__dirname, '..')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/, 
        loader: 'url', 
        query: {
          name: '[hash].[ext]',
          limit: 10240
        } 
      }
    ]
  },
  postcss: function() {
    return [autoprefixer, cssnano];
  }
};