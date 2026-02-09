class CategoriesRepository {
  constructor({ db_orm, cache_orm }) {
    this.db_orm = db_orm;
  }

  async create(category) {

    const data = await this.db_orm.create(category);

    return data;
  }
}

import Categories_repository from "./db/categoriesRepository.js";

export default new CategoriesRepository({
  db_orm: Categories_repository
});
