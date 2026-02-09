class ProductsCachingRepository {
  constructor(cacheProvide) {
    this.cacheProvide = cacheProvide;
  }
  async set(products){
    const result = await this.cacheProvide.create
  }
  async create(product) {
    console.log('productsCachingRepository.js-product', product)
    const result = await this.cacheProvide.create(product);
    return result;
  }
  async findByCategoryId(categoryId){
    const result = await this.cacheProvide.findByCategoryId(categoryId);
    return result;
  }
}

import RedisOmProducts from "../../infra/redis-om/Redis-om-products.js";

export default new ProductsCachingRepository(RedisOmProducts);