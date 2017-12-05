module.exports = {
  entry: __dirname + "/themes/pause/src/scripts/scripts.js",
  output: {
    path: __dirname + "/themes/pause/static/js",
    filename: "scripts.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js$/,
        query: {
          cacheDirectory: true,
          presets: ['env']
        }
      }
    ]
  }
};
