import express from 'express';
import cors from 'cors';
import { LowSync } from 'lowdb';
import { MemorySync } from 'lowdb';
import { nanoid } from 'nanoid';

const app = express();
const adapter = new MemorySync();
const db = new LowSync(adapter);
db.read();
db.data ||= { tasks: [] };
//app.use(cors());
//stuff added as a try
app.use(cors({
  origin: 'http://localhost:5173', // Your Vite frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.options('*', cors());
//stuff added as a try
app.use(express.json());

app.get('/tasks', (req, res) => {
  res.json(db.data.tasks);
});

app.get('/tasks/:id', (req, res) => {
  const task = db.data.tasks.find(t => t.id === req.params.id);
  task ? res.json(task) : res.status(404).send('Not found');
});

// app.get('/tasks', (req, res) => {
//   const { owner } = req.query;
//   const tasks = db.data.tasks;

//   if (owner) {
//     const filtered = tasks.filter(task => task.owner === owner);
//     return res.json(filtered);
//   }

//   res.json(tasks);
// });

app.post('/tasks', (req, res) => {
  const newTask = { id: nanoid().toString(), ...req.body };
  newTask.id = newTask.id.toString();

  db.data.tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const index = db.data.tasks.findIndex(t => t.id === req.params.id);
  if (index === -1) return res.status(404).send('Not found');
  db.data.tasks[index] = { ...db.data.tasks[index], ...req.body };
  res.json(db.data.tasks[index]);
});

app.delete('/tasks/:id', (req, res) => {
  db.data.tasks = db.data.tasks.filter(t => t.id !== req.params.id);
  res.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => console.log(`✅ API running at http://localhost:${PORT}`));
