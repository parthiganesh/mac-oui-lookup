module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    library: 'macOuiLookup',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  optimization: {
  },
};
