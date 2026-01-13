class PrismaUsers{
    constructor(PrismaClient){
        this.PrismaClient = PrismaClient
    }
    async PostUser(data){
        const result = await this.PrismaClient.User.create({
            data:{
                name: data.name,
                email: data.email,
                cpf: data.cpf,
                password: data.password
            }
        })
        return result
    }
}

import PrismaClient from '@prisma/client';

export default new PrismaUsers(PrismaClient);