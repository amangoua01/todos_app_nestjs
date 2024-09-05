import 'dotenv/config';


import { migrate } from 'drizzle-orm/mysql2/migrator';
import { connection, db } from './index.js';


await migrate(db, { migrationsFolder: './drizzle' });
await connection.end();
