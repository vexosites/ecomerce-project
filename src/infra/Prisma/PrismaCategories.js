class PrismaCategories {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }
  async create(category) {
    try {
      const category = await this.prismaClient.category.create({
        data: {
          name: category.name,
          slug: category.slug,
        },
      });
      return category;
    } catch (error) {
      throw error;
    }
  }
}

import PrismaClient from "../../../prisma/prisma-client.js";

export default new PrismaCategories(PrismaClient);
