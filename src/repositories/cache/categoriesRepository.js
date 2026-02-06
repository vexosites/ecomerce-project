class ProductsCachingRepository {
  constructor(cacheProvide) {
    this.cacheProvide = cacheProvide;
  }
  async create(category) {
    const result = await this.cacheProvide.create(category);
    return result
  }
}

import RedisOmProducts from "../../infra/redis-om/Redis-om-products.js";

export default new ProductsCachingRepository(RedisOmProducts);