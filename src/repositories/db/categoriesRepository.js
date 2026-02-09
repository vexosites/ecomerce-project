class CategoriesRepository {
  constructor(CategoriesRepository) {
    this.CategoriesRepository = CategoriesRepository;
  }
  async create(category) {
    return await this.CategoriesRepository.create(category);
  }
}

import PrismaCategories from "../../infra/Prisma/PrismaCategories.js";

export default new CategoriesRepository(PrismaCategories);