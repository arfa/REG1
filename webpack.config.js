import path from "path";
const json = require('./file.json');
const config = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.(js|jsx)$/i,
        loaders: [
            {
              test: /\.json$/,
              loader: 'json-loader'
            }
          ]
      }
    ]
  },
  output: {
    path: path.resolve("./dist")
  },
  plugins: []
};

export default config;