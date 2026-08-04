require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  db: {
    host: process.env.PG_HOST || 'localhost',
    port: process.env.PG_PORT || 5432,
    user: process.env.PG_USER || 'postgres',
    password: process.env.PG_PASSWORD || 'postgres',
    database: process.env.PG_DATABASE || 'dexmy_edtech'
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'dexmy-edtech-dev-secret-change-in-production',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  }
};
