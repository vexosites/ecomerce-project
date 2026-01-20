class PrismaImages {
    constructor(PrismaClient){
        this.PrismaClient = PrismaClient;
    }
async PostImages(img){
    console.log('immm', img)
return await this.PrismaClient.ProductImage.createMany({
    data: [
        ...img
    ]
})
}
}

import PrismaClient from "../../../prisma/prisma-client.js";

export default new PrismaImages(PrismaClient);