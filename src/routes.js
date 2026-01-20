import express from 'express'
import users from './routes/users.js';
import products from './routes/products.js';

const app = express()

app.use(express.json());

app.get('/', (req, res) => res.send('Server running!'));

app.use('/users', users);

app.use('/products', products);

export default app;