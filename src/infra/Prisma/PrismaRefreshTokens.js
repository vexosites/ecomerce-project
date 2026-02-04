class PrismaRefreshTokens{
    constructor(PrismaClient){
        this.PrismaClient = PrismaClient
    }
    async PostRefreshToken(data){
        const result = await this.PrismaClient.RefreshToken.create({
            data:{
                token: data.token,
                userId: data.userId
            }
        })
        return result;
    }
    async DeleteRefreshToken(data){
        const result = await this.PrismaClient.RefreshToken.delete({
            where:{
                userId: data.userId
            }
        })
        return result;
    }
}

import PrismaClient from '../../../prisma/prisma-client.js';

export default new PrismaRefreshTokens(PrismaClient);