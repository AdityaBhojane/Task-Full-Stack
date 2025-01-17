import pool from "../config/dbConfig";
import { createTaskTableQuery } from "./taskModel";


export const initializeTables = async () => {
  try {
    await pool.query(createTaskTableQuery);
    console.log('All tables are set up.');
  } catch (err) {
    console.error('Table initialization failed:', err);
    throw err;
  }
};
