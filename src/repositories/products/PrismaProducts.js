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
    try {
        const result = await this.PrismaClient.category.findUnique({
            where: { id: categoryId },
            include: { products: true }
          })
          
          if(!result){
            throw new AppError('invalid category', 404);
          }

          if(result.products.length === 0){
            throw new AppError('category without products', 404);
          }

        return result;
    } catch (error) {
        console.log('errorr', error)
        if (error.code === 'P1001' || error.code === 'P1002') {
            throw new AppError("database unavailable", 503);
        }
        throw error;
    }
}
}

import PrismaClient from "../../../prisma/prisma-client.js";
import AppError from "../../errors/UserError.js";

export default new PrismaProducts(PrismaClient);