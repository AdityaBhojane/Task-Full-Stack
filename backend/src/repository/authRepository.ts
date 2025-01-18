import pool from "../config/dbConfig";
import { IUser } from "../interface/userInterface";


export const createUser = async(userData:IUser)=>{
    // create user
    const { username, email, password } = userData;
    const user = await pool.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`, [username, email, password]);
    console.log(user)
    return user.rows[0];
};

export const getUserByEmail = async (email:string)=>{
    // get user by email
    const user = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
    return user.rows[0];
};

