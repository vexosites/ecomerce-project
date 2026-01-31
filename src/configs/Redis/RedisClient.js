import { createClient } from "redis";

const redisClient = createClient({
  url: process.env.REDIS_URL || process.env.REDIS_LOCAL
});
// eventos (importante pra debug)
redisClient.on("error", (err) => {
  console.error("❌ Redis error:", err);
});

redisClient.on("connect", () => {
  console.log("🔌 Redis conectado");
});

redisClient.on("ready", () => {
  console.log("✅ Redis pronto para uso");
});

// conectar
await redisClient.connect();

export default redisClient;
