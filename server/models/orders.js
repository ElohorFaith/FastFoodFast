import db from '../config/dbConfig';

// create order table
const createOrdersTable = async () => {
  const client = await db.connect();
  try {
    const orderModelQuery =  ` 
    CREATE TABLE IF NOT EXISTS orders (
    id UUID PRIMARY KEY, 
    quantity INTEGER NOT NULL,
    userId UUID NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    menuId UUID NOT NULL REFERENCES menu (id) ON DELETE CASCADE,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`;
    await client.query(orderModelQuery);
  } catch (err) {
    throw err;
  } finally {
    client.release();
  }
};

export default createOrdersTable;
