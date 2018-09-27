import db from '../config/dbConfig';

const userModelQuery = `
DROP TABLE IF EXISTS users CASCADE; 
CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY, 
firstname VARCHAR(40) NOT NULL,
lastname VARCHAR(40) NOT NULL,
email VARCHAR(100) NOT NULL, 
password_hash VARCHAR(100), 
created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), 
updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)`;


db.query(userModelQuery, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('users table created');
  db.end();
});
