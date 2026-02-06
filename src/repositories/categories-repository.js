class Products_repository {
  constructor({ db_orm, cache_orm }) {
    this.db_orm = db_orm;
    this.cache_orm = cache_orm;
  }

  async create(category) {
    const data = await this.db_orm.create(category);

    const cache = await this.cache_orm.create(data);

    return data;
  }
}

import CategoriesRepository from "./db/categoriesRepository.js";
import CachingCategories from "./cache/categoriesRepository.js";

export default new Products_repository({
  db_orm: PrismaCategories,
  cache_orm: RedisOmCategories,
});
