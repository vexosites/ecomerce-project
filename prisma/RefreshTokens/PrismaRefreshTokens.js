class PrismaRefreshTokens{
    constructor(PrismaClient){
        this.PrismaClient = PrismaClient
    }
    async PostRefreshToken(data){
        const result = await this.PrismaClient.RefreshTokens.create({
            data:{
                token: data.token,
                userId: data.userId
            }
        })
        return result;
    }
}

import PrismaClient from '@prisma/client';

export default new PrismaRefreshTokens(PrismaClient);