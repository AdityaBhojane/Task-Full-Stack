import express from "express";
import * as taskController from './controllers/taskControllers';
import * as authController from './controllers/authController';
import { initializeTables } from "./models/initialzeTables";
import { connectDB } from "./config/dbConfig";



const app = express();
app.use(express.json());

app.post('/tasks', taskController.createTask);
app.get('/tasks/:id', taskController.getTaskById);
app.put('/tasks/:id', taskController.updateTask);
app.delete('/tasks/:id', taskController.deleteTask);

// Auth Routes
app.post('/auth/register', authController.register);
app.post('/auth/login', authController.login);

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(4000, async () => {
  try {
    // await connectDB();
    await initializeTables();
    console.log('Tasks table ensured.');
    console.log(`Server running on port ${4000}`);
  } catch (err) {
    console.error('DB table creation failed:', err);
  }
});