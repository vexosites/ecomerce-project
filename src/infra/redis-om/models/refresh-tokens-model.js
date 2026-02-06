import { Schema } from "redis-om";
import client from "../../redisClient.js"

const refreshTokenSchema = new Schema(
  "refreshToken",
  {
    token: { type: "string" },
    userId: {type: "number"},
    createdAt: {type: "String" }
  },
  {
    dataStructure: "JSON"
  }
)

export default client.fetchRepository(refreshTokenSchema);
await productRepository.createIndex()