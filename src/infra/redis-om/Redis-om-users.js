class Redis_om_products {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }
  async create(product) {
    const entity = await this.productsRepository.createEntity({
      name: product.name,
      description: product.description,
      active: product.active,
      stock: product.stock,
      price: product.price,
      slug: product.slug,
      createdAt: product.createdAt,
      categoryId: product.categoryId,
    });
    return entity;
  }
  async findByCategoryId(categoryId) {
    const products = await this.productsRepository
      .search()
      .where("categoryId")
      .equals(categoryId)
      .return.all();
    return products;
  }
}

import products_model from "../redis-om/models/products-model.js";

export default new Redis_om_products(products_model);
