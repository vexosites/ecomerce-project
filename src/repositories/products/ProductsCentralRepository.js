class ProductsCentralRepository{
constructor(ProductsDataBaseRepository, ProductsCachingRepository){
this.ProductsDataBaseRepository = ProductsDataBaseRepository,
this.ProductsCachingRepository = ProductsCachingRepository
}
async getProductsByCategoryId(categoryId){
    const cache = await this.ProductsCachingRepository.getProductsByCategoryId(categoryId);
    if(cache.length > 0) {
        return cache;
    }
    const result = await this.ProductsDataBaseRepository.getProductsByCategoryId(categoryId);
    console.log(result.products)
    await this.ProductsCachingRepository.feed(result.products);
    return result;
}
async postProduct(product){
    const result = await this.ProductsDataBaseRepository.postProductBase(product);
    console.log(result)
    await this.ProductsCachingRepository.postProduct(result);
    return result;
}
}

import ProductsRepository from "./ProductsRepository.js";
import productsCachingInstance from "./productsCachingInstance.js";

export default new ProductsCentralRepository(ProductsRepository, productsCachingInstance)