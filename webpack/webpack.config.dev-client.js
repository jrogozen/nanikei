var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
// var cssnano = require('cssnano');

module.exports = {
  name: 'client side rendering',
  context: path.resolve(__dirname, '..'),
  target: 'web',
  devtool: 'cheap-eval-source-map',
  alias: {
    'nanikei': __dirname, // doesn't work
    'config': 'config',
    'app': 'app',
    'server': 'server'
  },
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, '..', 'app')
  ],
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEV__: process.env.NODE_ENV === 'development'
    }) 
  ],
  resolve: {
    root: path.resolve(__dirname, '..'),
    extensions: ['', '.js', '.scss']
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
        loader: 'style-loader!css-loader!sass-loader',
        include: path.resolve(__dirname, '..')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/, 
        loader: 'url', 
        query: {limit: 10240} 
      }
    ]
  }
  // postcss: function() {
  //   return [autoprefixer, cssnano];
  // }
};