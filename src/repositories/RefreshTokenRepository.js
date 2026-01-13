import PrismaRefreshTokens from "../../prisma/RefreshTokens/PrismaRefreshTokens";

class RefreshTokenRepository extends PrismaRefreshTokens {
async postRefreshToken(token){
    const result = await super.postRefreshToken(token);
    return result;
}
}

export default new RefreshTokenRepository();