import { Pool } from 'pg';
import dotenv from 'dotenv';


dotenv.config();

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
});

// if error
pool.on('error', (err) => {
  console.error('Error trying to connect to the database', err);
  pool.end();
  process.exit(1);
});

// database connection
pool.on('connect', () => {
  console.log('Database Connected Successfully');
});


export default pool;
