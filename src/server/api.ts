import { Router } from 'express';

const api = Router();

api.get('/test', (req, res) => {
  res.send(`${req.method} ok`);
});

export default api;
