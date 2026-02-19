class RefreshTokensCachingRepository {
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

import productsRedisRepository from "../../infra/redis/products-redis-repository.js";

export default new RefreshTokensCachingRepository(productsRedisRepository);