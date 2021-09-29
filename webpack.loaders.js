module.exports = {
  resolve: {
      extensions: ['.js', '.jsx']
  },
  entry: './index.js',
  output: {
      filename: 'bundle.js'
  },
  module: {
      rules : [
          { test: /\.js?/, loader: 'bable-loader', exclude: /node_modules/ }
      ]
  }
}