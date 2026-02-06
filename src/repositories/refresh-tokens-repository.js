export class Products_repository {
  constructor({ db_orm, cache_orm }) {
    this.db_orm = db_orm;
    this.cache_orm = cache_orm;
  }

  async create(product) {
    try {
      const data = await this.db_orm.create(product);

      const cache = await this.cache_orm.create(data);

      return data;
    } catch (error) {
      throw error;
    }
  }

  async findByCategoryId(categoryId) {
    const cache = await this.cache_orm.findByCategoryId(categoryId);
    if (cache?.lenght) {
      return cache;
    }
    const products = await this.cache_orm.findByCategoryId(categoryId);
    if(products.lenght < 1){ 
      return null;
    }
    return products;
  }

  async findByName(user) {}
}

import PrismaProducts from "../infra/Prisma/PrismaUsers.js";
import RedisOmProducts from "../infra/redis-om/Redis-om-users.js";

export default new Products_repository({
  db_orm: PrismaProducts,
  cache_orm: RedisOmProducts,
});
