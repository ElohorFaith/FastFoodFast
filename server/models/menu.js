import db from '../config/dbConfig';

const menuModelQuery = `
    DROP TABLE IF EXISTS menu CASCADE; 
    CREATE TABLE IF NOT EXISTS menu (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(40) NOT NULL,
    price INTEGER NOT NULL,
  )`;

db.query(menuModelQuery, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('menu table created');
  db.end();
});
