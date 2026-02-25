export class Products_repository {
  constructor({ db_orm, cache_orm }) {
    this.db_orm = db_orm;
  }

  async create(user) {
    try {
      const data = await this.db_orm.create(user);
      console.log('db-data', data)
      return data;
    } catch (error) {
      throw error;
    }
  }

  async findByCategoryId(categoryId) {
    const cache = await this.cache_orm.findByCategoryId(categoryId);
    if (products?.lenght) {
      return cache;
    }
    const products = await this.cache_orm.findByCategoryId(categoryId);
    return products;
  }

  async findByName(user) {}
}

import UserRepository from "./db/UserRepository.js";

export default new Products_repository({
  db_orm: UserRepository,
});
