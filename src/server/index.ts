import * as express from 'express';
import * as path from 'path';
import api from './api';

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'production';

const app = express();

if (ENV === 'development') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('../../config/webpack.config.dev');
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static(path.resolve(__dirname, '../client')));
}
app.use(api);

const server = app.listen(PORT, () => {
  console.log('server is ready on port', server.address().port);
});
