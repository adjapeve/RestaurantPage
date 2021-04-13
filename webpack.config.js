const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  //debugs in source code, not in bundle
  devtool:"source-map"
  //if source map doesn't workdevtool:"inline-source-map"
};