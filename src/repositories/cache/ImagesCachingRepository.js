class ProductsCachingRepository {
  constructor(cacheProvide) {
    this.cacheProvide = cacheProvide;
  }
  async create(images) {
    console.log('ImagesCachingRepository.js-images', images)
    const result = await this.cacheProvide.create(images);
    return result;
  }
}

import RedisOmProducts from "../../infra/redis-om/Redis-om-products.js";

export default new ProductsCachingRepository(RedisOmProducts);