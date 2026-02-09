class Redis_om_products {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }
  async create(product) {
    console.log("debubbb", this.productsRepository)
    const entity = await this.productsRepository.save({
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
    console.log("cat", this.productsRepository)
    const products = await this.productsRepository
      .search()
      .where("categoryId")
      .equals(categoryId)
      .return.all();
      console.log('products', products)
    return products;
  }
}

import products_model from "./models/products-model.js";

export default new Redis_om_products(products_model);