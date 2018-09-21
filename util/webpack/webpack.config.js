module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: `${__dirname}/lib/`,
    publicPath: '/lib/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'env', 'flow']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
