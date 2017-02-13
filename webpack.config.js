module.exports = {
  entry: "./src/scripts/scripts.js",
  output: {
    path: "static/assets/js",
    filename: "scripts.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
