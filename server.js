/**
 * Root Server Entry Point
 * Delegates to the modular backend server implementation in /backend/server.js
 */
const { startServer } = require('./backend/server');

startServer(process.env.PORT || 3000);
