class ImagesRepository {
constructor(Images){
    this.Images = Images
}
async PostImages(imgsArray){
    return await this.Images.PostImages(imgsArray)
}
}

import PrismaImagens from "./Images/PrismaImagens.js"

export default new ImagesRepository(PrismaImagens);