var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
  entry: APP_DIR + '/components/react-slides.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
 module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test : /\.scss?/,
        include : APP_DIR,
        loader : ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.(woff|woff2|ttf|eot|svg|png|jpg|gif)(.*)?$/, 
          loader: ['file-loader']
      },      
      {
        test : /\.css?/,
        include : APP_DIR,
        loader : ['style-loader', 'css-loader']
      },
    ]
  }  
};

module.exports = config;