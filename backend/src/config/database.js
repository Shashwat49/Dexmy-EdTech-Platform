const { Pool } = require('pg');
const config = require('./config');

const pool = new Pool({
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database
});

const connectDB = async () => {
  const client = await pool.connect();
  console.log('PostgreSQL connected');
  client.release();
};

module.exports = { pool, connectDB };
