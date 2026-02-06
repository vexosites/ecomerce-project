class ProductsCachingRepository {
  constructor(cacheProvide) {
    this.cacheProvide = cacheProvide;
  }
  async create(product) {
    const result = await this.cacheProvide.create(product);
  }
  async findByCategoryId(categoryId){
    const result = await this.cacheProvide.findByCategoryId(categoryId);
    return result;
  }
}

import RedisOmProducts from "../../infra/redis-om/Redis-om-products.js";

export default new ProductsCachingRepository(RedisOmProducts);