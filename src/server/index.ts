import * as path from 'path';
import * as express from 'express';
// import * as mongoose from 'mongoose';
import { config as configDotenv } from 'dotenv';
import api from './api';

configDotenv();

const PORT = process.env.PORT || 3000;
// const MONGO_URL = process.env.MONGO_URL;
const ENV = process.env.NODE_ENV || 'production';

const app = express();

// (mongoose as any).Promise = Promise;
// mongoose.connect(MONGO_URL, {}, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('db connected');
//   }
// });

if (ENV === 'development') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('../../config/webpack.config.dev');
  app.use(webpackMiddleware(webpack(webpackConfig), {
    hot: true,
  }));
} else {
  app.use(express.static(path.resolve(__dirname, '../client')));
}
app.use(api);

const server = app.listen(PORT, () => {
  console.log('server is ready on port', server.address().port);
});
