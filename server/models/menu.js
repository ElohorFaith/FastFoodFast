import db from '../config/dbConfig';

// create menu table
const createMenuTable = async () => {
  const client = await db.connect();
  try {
    const menuModelQuery = `
    CREATE TABLE IF NOT EXISTS menu (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(40) NOT NULL,
    price INTEGER NOT NULL
  )`;
    await client.query(menuModelQuery);
  } catch (err) {
    throw err;
  } finally {
    client.release();
  }
};

export default createMenuTable;
