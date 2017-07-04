var path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'js/script.js',
    path: path.resolve(__dirname, 'dest/assets/')
  },
  devServer: {
    contentBase: path.join(__dirname, "dest"),
//   compress: true,
//   port: 9000
},
//   devtool:"inline-sourcemap",
  devtool: false,
  module:{
      rules:[
          {
              test: /\.scss$/,
              use:ExtractTextPlugin.extract({
                  fallback: 'style-loader', 
                  use: ['css-loader', 'sass-loader'],
                  
              })
          },
          {
              test: /\.jpg$/,
              use:'file-loader?name=[name].[ext]&outputPath=/assets/imgs/'
          }
      ]
  },
  plugins: [
    new ExtractTextPlugin({
        filename: "css/app.css",
        disable:false,
        allChunks: true
    }),
  ]
};
