"use strict";
// import {Client} from 'pg';
// export const pgClient = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'postgres',
//     password: 'Bhojane@1181',
//     port: 5432,
// });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
// export const pgClient = new Client('postgresql://Test%20Project_owner:ZgvnW9dw5qTj@ep-bitter-leaf-a1wrmqak.ap-southeast-1.aws.neon.tech/Test%20Project?sslmode=require');
// export async function connect() {
//     try {
//         await pgClient.connect();
//         console.log("connected to db")
//     } catch (error) {
//         console.log('error')
//     } 
// }
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    connectionString: 'postgresql://Test%20Project_owner:ZgvnW9dw5qTj@ep-bitter-leaf-a1wrmqak.ap-southeast-1.aws.neon.tech/Test%20Project?sslmode=require',
    ssl: { rejectUnauthorized: false }
});
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pool.connect();
    }
    catch (error) {
    }
});
exports.connectDB = connectDB;
exports.default = pool;
