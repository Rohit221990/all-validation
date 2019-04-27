module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/src',
    filename: 'bundle.js',
    resolve: {
      extensions: ['', '.js']
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            cacheDirectory: true,
            presets: ['es2015']
          }
        }
      ]
    }
  }
}
