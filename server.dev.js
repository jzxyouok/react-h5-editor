var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var colorsSupported = require('supports-color');
var config = require('./build/webpack.dev.config');

let port = 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: colorsSupported
  },
  historyApiFallback: true
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:/' + port);
});
