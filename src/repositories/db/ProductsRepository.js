class ProductsRepository{
    constructor(orm){
        this.orm = orm;
    }

    async create(product){
        const result = await this.orm.postProductBase(product);
        return result;
    }

    async findByCategoryId(categoryId){
        return await this.orm.getProductsByCategoryId(categoryId)
    }
}

import PrismaProducts from "../../infra/Prisma/PrismaProducts.js";

export default new ProductsRepository(PrismaProducts);