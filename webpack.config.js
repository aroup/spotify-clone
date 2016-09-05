const webpack = require('webpack');
const path = require('path');

const PATHS = {
  app: './src/index.js',
  html: './src/index.html',
  dist: path.join(__dirname, 'dist')
};

module.exports = {
  entry: {
    javascript: PATHS.app,
    html: PATHS.html
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: PATHS.dist,
    hot : true
  },
  eslint: {
    emitWarning: true
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)?$/,
        loaders: ["eslint-loader"],
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      }
    ]
  },
  resolve: {
   extensions: ['', '.js', '.jsx']
 },
 plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
