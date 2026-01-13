import express from 'express'
import users from './routes/users.js';

const app = express()

app.get('/', (req, res) => res.send('Server running!'));

app.use('/users', users);

export default app;