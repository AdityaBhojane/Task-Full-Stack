import { ITask } from '../interface/taskInterface';
import * as taskRepository from '../repository/taskRepository';


export const createTaskService = async (task: ITask) => {
  return await taskRepository.createTask(task);
};

export const getTasksService = async () => {
  return await taskRepository.getTasks();
};

export const getTaskByIdService = async (id: number) => {
  return await taskRepository.getTaskById(id);
};

export const updateTaskService = async (id: number, task: Partial<ITask>) => {
  return await taskRepository.updateTask(id, task);
};

export const deleteTaskService = async (id: number) => {
  return await taskRepository.deleteTask(id);
};
