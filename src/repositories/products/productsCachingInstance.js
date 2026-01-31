class ProductsCaching{
constructor(ProductsCaching){
this.ProductsCaching = ProductsCaching;
}
async postProduct(product){
    const result = await this.ProductsCaching.postProduct(product);
    return result;
}
async getProductsByCategoryId(id){
    const result = await this.ProductsCaching.getProductsByCategoryId(id);
    return result 
}
async feed(product){
    await this.ProductsCaching.feed(product);
}
}

import RedisProducts from "./RedisProducts.js";

export default new ProductsCaching(RedisProducts);