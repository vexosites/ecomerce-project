import { Schema } from "redis-om";
import client from "../../redisClient.js";

console.log("schema", Schema);

const productSchema = new Schema(
  "product",
  {
    name: { type: "string" },
    price: { type: "number" },
    stock: { type: "number" },
    active: { type: "boolean" },
    slug: { type: "string" },
    description: { type: "string" },
    categoryId: { type: "number" },
    createdAt: { type: "string" },
    updatedAt: { type: "string" },
  },
  {
    dataStructure: "JSON",
  }
);

const productRepository = client.fetchRepository(productSchema, client);

productRepository.createIndex();

export default productRepository;
