class RedisProducts {
    constructor(redisClient) {
      this.redisClient = redisClient;
    }
  
    // 🔍 Buscar produtos por categoria
    async getProductsByCategoryId(categoryId) {
      if (!productIds || productIds.length === 0) {
        return [];
      }

      const category = await this.redisClient.hGet(`category:${categoryId}`);

      if(!category){
        return 'invalid category!'
      }
      
      const products = await Promise.all(
        productIds.map(id =>
          this.redisClient.hGetAll(`product:${id}`)
        )
      );

      return products;
    }
  
    // ➕ Criar produto
    async postProduct(product) {
      await this.redisClient.hSet(`product:${product.id}`, {
        id: String(product.id), 
        name: product.name,
        description: product.description,
        categoryId: String(product.categoryId),
        slug: product.slug,
        price: String(product.price),
        stock: String(product.stock),
        active: String(product.active),
        createdAt: product.createdAt.toISOString(),
        updatedAt: product.updatedAt.toISOString()
      });
  
      // 🔗 relacionamento categoria -> produto
      await this.redisClient.hSet(
        `category:${product.categoryId}`,{
        name: product.name,
        slug: product.slug
    });
    }
    async feed(products) {
        return Promise.all(
          products.map(p => this.postProduct(p))
        );
      }      
  }
  
  import redisClient from "../../configs/Redis/RedisClient.js";
  
  export default new RedisProducts(redisClient);
  