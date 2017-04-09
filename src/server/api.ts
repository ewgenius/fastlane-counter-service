import { Router } from 'express';

const api = Router();

api.get('/test', (req, res) => {
  res.send(`${req.method} ok`);
});

api.post('/counter/:id/increment', (req, res) => {
  console.log(req.params.id);
  res.send({
    action: 'increment',
    id: req.params.id
  });
});

api.post('/counter/:id/decrement', (req, res) => {
  console.log(req.params.id);
  res.send({
    action: 'decrement',
    id: req.params.id
  });
});

export default api;
