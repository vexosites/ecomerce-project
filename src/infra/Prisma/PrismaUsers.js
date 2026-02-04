import PrismaClient from "../../../prisma/prisma-client.js"

class PrismaUsers{
    constructor(PrismaClient){
        this.PrismaClient = PrismaClient
    }
    async PostUser(data){
        const result = await this.PrismaClient.user.create({
            data:{
                name: data.name,
                email: data.email,
                cpf: data.cpf,
                password: data.password
            }
        })
        return result
    }

    async FindByEmail(email){
        const result = await this.PrismaClient.user.findUnique({
         where: {
            email: email
         }
        })
        return result
    }
}

export default new PrismaUsers(PrismaClient);