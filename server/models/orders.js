import db from '../config/dbConfig';

const orderModelQuery = `
    DROP TABLE IF EXISTS orders; 
    CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY, 
    quantity INTEGER NOT NULL,
    userId INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
    menuId INTEGER NOT NULL REFERENCES menu (id) ON DELETE CASCADE,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`;

db.query(orderModelQuery, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('orders ---table created');
  db.end();
});
