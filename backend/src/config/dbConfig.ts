import {Client} from 'pg';

const pgClient = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Bhojane@1181',
    port: 5432,
});

export async function connect() {
    try {
        await pgClient.connect();
        console.log("connected to db")
    } catch (error) {
        console.log('error')
    }
}