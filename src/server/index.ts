import * as express from 'express';
import * as path from 'path';
import api from './api';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client')));
app.use(api);

const server = app.listen(PORT, () => {
  console.log('server is ready on port', server.address().port);
});
