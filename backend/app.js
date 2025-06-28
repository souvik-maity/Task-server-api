const express = require('express');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

dotenv.config();

const app = express();
app.use(express.json());

// Swagger setup (optional for now)
const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'],
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/tasks', taskRoutes);

// ✅ Export app for testing (DO NOT LISTEN HERE)
module.exports = app;

// ✅ Start the server ONLY if run directly (not when testing)
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}
