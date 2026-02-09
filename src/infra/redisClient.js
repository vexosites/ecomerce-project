import { Client } from "redis-om";

const client = new Client();

export async function connectRedis() {
  try {
    if (!client.isOpen()) {
      await client.open(process.env.REDIS_URL);
      console.log("Redis conectado");
    }
  } catch (error) {
    console.error("Erro ao conectar no Redis:", error);
  }
}

await connectRedis()

export default client;
