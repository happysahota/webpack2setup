var path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dest/assets/js')
  }
};
