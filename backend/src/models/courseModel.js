const courseQueries = {
  createTable: `
    CREATE TABLE IF NOT EXISTS courses (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255),
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `,
  findAll: 'SELECT * FROM courses;',
  findById: 'SELECT * FROM courses WHERE id = $1;',
  create: 'INSERT INTO courses (title, description) VALUES ($1, $2) RETURNING *;',
  update: 'UPDATE courses SET title = $1, description = $2 WHERE id = $3 RETURNING *;',
  remove: 'DELETE FROM courses WHERE id = $1;'
};

module.exports = courseQueries;
