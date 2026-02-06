class RedisOmCategories {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async create(category){
    const category = await this.categoriesRepository.createEntity({
        name: category.name,
        slug: category.slug
    })
    return category;
  }
}

import refreshTokensRepository from "./models/refresh-tokens-model.js";

export default new Redis_om_refresh_tokens(refreshTokensRepository);
