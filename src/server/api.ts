import { Router } from 'express';

const api = Router();

class Counters {
  private counters: { [id: string]: number } = {};

  increment(id: string) {
    if (this.counters[id] === undefined) {
      this.counters[id] = 0;
    } else {
      this.counters[id] += 1;
    }
    return this.counters[id];
  }

  decrement(id: number) {
    if (this.counters[id] === undefined) {
      this.counters[id] = 0;
    } else {
      this.counters[id] -= 1;
    }
    return this.counters[id];
  }

  get list() {
    return Object
      .keys(this.counters)
      .map((id) => ({
        id,
        counter: this.counters[id]
      }));
  }
}

const counters = new Counters();

api.get('/test', (req, res) => {
  res.send(`${req.method} ok`);
});

api.get('/counters', (req, res) => {
  res.send(counters.list);
});

api.post('/counter/:id/increment', (req, res) => {
  const result = counters.increment(req.params.id);
  res.send({
    action: 'increment',
    id: req.params.id,
    result
  });
});

api.post('/counter/:id/decrement', (req, res) => {
  const result = counters.decrement(req.params.id);
  res.send({
    action: 'decrement',
    id: req.params.id,
    result
  });
});

export default api;
