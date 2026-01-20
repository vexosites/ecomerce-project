class ProductsRepository{
    constructor(orm){
        this.orm = orm;
    }

    async postProductBase(product){
        const result = await this.orm.postProductBase(product);
        return result;
    }

    async getProductsByCategoryId(categoryId){
        return await this.orm.getProductsByCategoryId(categoryId)
    }
}

import PrismaProducts from "./products/PrismaProducts.js";

export default new ProductsRepository(PrismaProducts);