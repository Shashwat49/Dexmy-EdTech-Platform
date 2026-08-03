const userQueries = {
  createTable: `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255) UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `,
  findAll: 'SELECT * FROM users;',
  findById: 'SELECT * FROM users WHERE id = $1;',
  create: 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *;',
  update: 'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *;',
  remove: 'DELETE FROM users WHERE id = $1;'
};

module.exports = userQueries;
