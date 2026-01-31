import express from 'express'
import dotenv from './configs/dotenv.js';
import app from './routes.js'

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});