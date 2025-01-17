import { Request, Response } from 'express';
import * as taskService from '../service/taskService';

export const createTask = async (req: Request, res: Response) => {
  try {
    const task = await taskService.createTaskService(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

export const getTasks = async (_req: Request, res: Response) => {
  try {
    const tasks = await taskService.getTasksService();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const task = await taskService.getTaskByIdService(Number(req.params.id));
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch task' });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const task = await taskService.updateTaskService(Number(req.params.id), req.body);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    await taskService.deleteTaskService(Number(req.params.id));
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};
