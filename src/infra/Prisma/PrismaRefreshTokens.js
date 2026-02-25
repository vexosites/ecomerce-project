class PrismaRefreshTokens{
    constructor(PrismaClient){
        this.PrismaClient = PrismaClient
    }
    async create(refreshToken){
        console.log('refreshToken', refreshToken)
        const result = await this.PrismaClient.RefreshToken.create({
            data:{
                token: refreshToken.token,
                userId: refreshToken.userId
            }
        })
        return result;
    }
    async deleteByUserId(userId){
        const result = await this.PrismaClient.RefreshToken.delete({
            where:{
                userId: userId
            }
        })
        return result;
    }
}

import PrismaClient from '../../../prisma/prisma-client.js';

export default new PrismaRefreshTokens(PrismaClient);