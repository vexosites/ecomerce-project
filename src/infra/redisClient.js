import { Client } from "redis-om"

const client = new Client()

await client.open(process.env.REDIS_URL)

export default client