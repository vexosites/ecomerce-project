export class Products_repository {
  constructor({ db_orm, cache_orm }) {
    this.db_orm = db_orm;
    this.cache_orm = cache_orm;
  }

  async create(user) {
    try {
      const data = await this.db_orm.create(user);

      const cache = await this.cache_orm.create(user);

      return data

    } catch (error) {
      throw error
    }
  }

  async findByName(user) {}
}

import PrismaProducts from "../infra/Prisma/PrismaProducts.js";
import RedisOmProducts from "../infra/redis-om/Redis-om-products.js";

export default new Products_repository({
  db_orm: PrismaProducts,
  cache_orm: RedisOmProducts,
});
