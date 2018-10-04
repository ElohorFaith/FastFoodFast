import db from '../config/dbConfig';

// create users table
const createUsersTable = async () => {
  const client = await db.connect();

  try {
    const userModelQuery = ` 
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY, 
    firstname VARCHAR(40) NOT NULL,
    lastname VARCHAR(40) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    userRole VARCHAR(100) NOT NULL,
    password VARCHAR(100), 
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );`;
    await client.query(userModelQuery);
  } catch (err) {
    throw err;
  } finally {
    client.release();
  }
};

export default createUsersTable;
