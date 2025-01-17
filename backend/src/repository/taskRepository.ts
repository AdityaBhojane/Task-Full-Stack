import pool from "../config/dbConfig";
import { ITask } from "../interface/taskInterface";

export const createTask = async (task: ITask) => {
  const { title, description, status, isPinned } = task;
  // best approach parameterized query with placeholders
  // to prevent SQL injection attacks and vulnerabilities
  const result = await pool.query(
    `INSERT INTO tasks (title, description, status, isPinned)
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [title, description, status, isPinned]
  );
  return result.rows[0];
};

export const getTasks = async () => {
  const result = await pool.query(`SELECT * FROM tasks`);
  return result.rows;
};

export const getTaskById = async (id: number) => {
  const result = await pool.query(`SELECT * FROM tasks WHERE id = $1`, [id]);
  return result.rows[0];
};

export const updateTask = async (id: number, task: Partial<ITask>) => {
  const { title, description, status, isPinned } = task;
  const result = await pool.query(
    `UPDATE tasks SET title = $1, description = $2, status = $3, isPinned = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5 RETURNING *`,
    [title, description, status, isPinned, id]
  );
  return result.rows[0];
};

export const deleteTask = async (id: number) => {
  await pool.query(`DELETE FROM tasks WHERE id = $1`, [id]);
};
