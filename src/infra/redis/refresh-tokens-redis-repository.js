class RefreshTokensRedisRepository{
    constructor(redisProvide, categoryIndex){
        this.redisProvide = redisProvide
        this.categoryIndex = categoryIndex
    }
    async create(token){
        const result = await this.redisProvide.hSet(`token:${token.id}`, {
            ...token
        });
        await this.redisProvide.set(`token-user-id:${token.userId}`, token.userId);
        return result;
    }
}

export default new RefreshTokensRedisRepository()