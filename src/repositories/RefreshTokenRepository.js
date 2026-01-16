class RefreshTokenRepository {
    constructor(RefreshTokens){
        this.RefreshTokens = RefreshTokens;
    }
async PostRefreshToken(token){
    const result = await this.RefreshTokens.PostRefreshToken(token);
    return result;
}
async DeleteRefreshToken(userId){
    const result = await this.RefreshTokens.DeleteRefreshToken({userId: userId});
    return result;
}
}

import PrismaRefreshTokens from "./RefreshTokens/PrismaRefreshTokens.js";

export default new RefreshTokenRepository(PrismaRefreshTokens);