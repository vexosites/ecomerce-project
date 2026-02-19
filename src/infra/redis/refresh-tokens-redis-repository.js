class RefreshTokensRedisRepository{
    constructor(redisProvide, categoryIndex){
        this.redisProvide = redisProvide
        this.categoryIndex = categoryIndex
    }
    async create(productId, categoryId){
        const categoryProduct = await this.redisProvide.hSet(`category:${categoryId}`, {productId});
    }
}

export default new RefreshTokensRedisRepository()