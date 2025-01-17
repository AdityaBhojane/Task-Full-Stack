// import {Client} from 'pg';
// export const pgClient = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'postgres',
//     password: 'Bhojane@1181',
//     port: 5432,
// });

// export const pgClient = new Client('postgresql://Test%20Project_owner:ZgvnW9dw5qTj@ep-bitter-leaf-a1wrmqak.ap-southeast-1.aws.neon.tech/Test%20Project?sslmode=require');

// export async function connect() {
//     try {
//         await pgClient.connect();
//         console.log("connected to db")
//     } catch (error) {
//         console.log('error')
//     } 
// }

import { Pool } from 'pg';
const pool = new Pool({
    connectionString: 'postgresql://Test%20Project_owner:ZgvnW9dw5qTj@ep-bitter-leaf-a1wrmqak.ap-southeast-1.aws.neon.tech/Test%20Project?sslmode=require',
    ssl: { rejectUnauthorized: false }
});

export const connectDB = async()=>{
    try {
        await pool.connect()
    } catch (error) {
        
    }
}

export default pool;