const { pool } = require('../config/database');
const authQueries = require('../models/authModel');

const initTables = async () => {
  await pool.query(authQueries.createUsersTable);
  await pool.query(authQueries.createTeacherProfilesTable);
  await pool.query(authQueries.createStudentProfilesTable);
  await pool.query(authQueries.createParentStudentLinksTable);
  await migrateUsersTable();
  console.log('Auth tables initialized');
};

const migrateUsersTable = async () => {
  await pool.query('ALTER TABLE users ALTER COLUMN email DROP NOT NULL;');
  await pool.query(`
  DO $$
  BEGIN
    IF NOT EXISTS (
      SELECT 1 FROM pg_constraint WHERE conname = 'users_email_or_phone_check'
    ) THEN
      ALTER TABLE users
      ADD CONSTRAINT users_email_or_phone_check
      CHECK (email IS NOT NULL OR phone IS NOT NULL);
    END IF;
  END $$;
  `);
  await pool.query(`
    CREATE UNIQUE INDEX IF NOT EXISTS users_phone_unique
    ON users(phone)
    WHERE phone IS NOT NULL;
  `);
};

module.exports = { initTables };
