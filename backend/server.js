const app = require('./src/app');
const config = require('./src/config/config');
const { connectDB } = require('./src/config/database');
const { initTables } = require('./src/config/initDb');

const PORT = config.port;

const startServer = async () => {
  await connectDB();
  await initTables();

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer().catch((err) => {
  console.error('Failed to start server:', err.message);
  process.exit(1);
});
