import db from '../config/dbConfig';

// create order table
const createOrdersTable = async () => {
  const client = await db.connect();
  try {
    const orderModelQuery = `
    CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY, 
    quantity VARCHAR(50) NOT NULL,
    userId SERIAL NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    menuId VARCHAR(100) NOT NULL,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );`;

    await client.query(orderModelQuery);
  } catch (err) {
    throw err;
  } finally {
    client.release();
  }
};

export default createOrdersTable;
