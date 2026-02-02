import { Schema } from "redis-om";

const productsSchema = new Schema('products', {
    name: { type: 'string' },
    slug: { type: 'string' },
    description: { type: 'string' },
    price: { type: 'number' },        // Decimal do Prisma vira number
    stock: { type: 'number' },
    active: { type: 'boolean', default: true },
    createdAt: { type: 'date', default: () => new Date() },
    updatedAt: { type: 'date', default: () => new Date() },

    // Relacionamentos manuais
    categoryId: { type: 'number' },    // guarda o ID da categoria
    imageIds: { type: 'string[]' },    // IDs de imagens do produto
    orderItemIds: { type: 'string[]' },// IDs de order items
    cartItemIds: { type: 'string[]' }, // IDs de cart items
});

export default productsSchema;
