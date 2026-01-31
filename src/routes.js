import express from 'express'
import users from './routes/users.js';
import products from './routes/products.js';
import redisClient from './configs/Redis/RedisClient.js';

const app = express()

app.use(express.json());

app.get('/', (req, res) => res.send('Server running!'));

app.get('/redis/:data', async (req, res) => {
    await redisClient.set('data', req.params.data);

    const data = await redisClient.get('data');

    const result = data ? true : false;

    return res.status(200).json({ result, data });
});

app.use('/users', users);

app.use('/products', products);

export default app;