class CategoriesRedisRepository{
    constructor(redisProvide){
        this.redisProvide = redisProvide
    }
    async create(productId, categoryId){
        const categoryProduct = await this.redisProvide.hSet(`category:${categoryId}`, {productId});
    }
}

import redisClient from "../redisClient.js";

export default new CategoriesRedisRepository(redisClient);