import express from "express";
import * as taskController from './controllers/taskControllers';
import { initializeTables } from "./models/initialzeTables";



const app = express();
app.use(express.json());

app.post('/tasks', taskController.createTask);
app.get('/tasks', taskController.getTasks);
app.get('/tasks/:id', taskController.getTaskById);
app.put('/tasks/:id', taskController.updateTask);
app.delete('/tasks/:id', taskController.deleteTask);

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(4000, async () => {
  try {
    await initializeTables();
    console.log('Tasks table ensured.');
    console.log(`Server running on port ${4000}`);
  } catch (err) {
    console.error('DB table creation failed:', err);
  }
});