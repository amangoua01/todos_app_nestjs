
import mysql from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';
import * as dotenv from 'dotenv';


dotenv.config();

export const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

export const db = drizzle(connection);

console.log(process.env);