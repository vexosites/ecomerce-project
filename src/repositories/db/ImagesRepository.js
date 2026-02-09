class ImagesRepository {
  constructor(Images) {
    this.Images = Images;
  }
  async create(imgsArray) {
    return await this.Images.PostImages(imgsArray);
  }
}

import PrismaImagens from "../../infra/Prisma/PrismaImagens.js";

export default new ImagesRepository(PrismaImagens);
