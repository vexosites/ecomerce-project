import AppError from "../errors/UserError";

class categoriesService {
  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }
  async post(validator) {
    try {
      const data = await this.categoriesRepository.create({
        name: validator.name,
        slug: validator.slug,
      });
      return data;
    } catch (error) {
      throw new AppError(error, 400);
    }
  }
}

export default new categoriesService();
