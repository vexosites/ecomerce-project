import { Schema } from "redis-om";
import client from "../../redisClient";

import { Schema } from "redis-om"
import client from "./redisClient.js"

const productSchema = new Schema(
  "product",
  {
    name: { type: "string" },
    price: { type: "number" },
    stock: { type: "number" },
    category: { type: "string" },
    active: {type: "boolean"},
    slug: {type: "string"},
    description: {type: "string"},
    categoryId: {type: "int"},
    createdAt: {type: "String" },
    updatedAt: {type: "string"}
  },
  {
    dataStructure: "JSON"
  }
)

export const productRepository = client.fetchRepository(productSchema)
await productRepository.createIndex()