class PrismaProducts{
    constructor(PrismaClient){
        this.PrismaClient = PrismaClient;
    }
async postProductBase(product){
return await this.PrismaClient.product.create({
    data: {
        name: product.name,
        description: product.description,
        categoryId: product.categoryId,
        price: product.price,
        stock: product.stock,
        slug: product.slug,
        active: product.active
    }
})
}
async getProductsByCategoryId(categoryId){
    return await this.PrismaClient.product.findMany({
        where: {
            categoryId: categoryId
        }
    })
}
}

import PrismaClient from "../../../prisma/prisma-client.js";

export default new PrismaProducts(PrismaClient);