export class Products_repository {
  constructor({ db_orm, cache_orm }) {
    this.db_orm = db_orm;
    this.cache_orm = cache_orm;
  }

  async create(product) {
    try {
      const data = await this.db_orm.create(product);

      const cache = await this.cache_orm.create(product);

      return data;
    } catch (error) {
      throw error;
    }
  }

  async findByCategoryId(categoryId) {
    const cache = await this.cache_orm.findByCategoryId(categoryId);
    console.log(cache)
    if (cache.length > 0) {
      return cache;
    }
    const products = await this.db_orm.findByCategoryId(categoryId);
    console.log('products', products)
    if(products.length < 1){
      return null;
    }
    await this.cache_orm.set(products);
    return products;
  }

  async findByName(user) {}
}

import productsRepository from "./db/ProductsRepository.js";
import RedisOmProducts from "./cache/ProductsCachingRepository.js";

export default new Products_repository({
  db_orm: productsRepository,
  cache_orm: RedisOmProducts,
});
