import { Schema } from "redis-om";

const categoriesSchema = new Schema('categories', {
    name: { type: 'string' },
    slug: { type: 'string' },
    createdAt: { type: 'date', default: () => new Date() },

    // Relacionamento manual com produtos
    productIds: { type: 'string[]' }  // IDs dos produtos pertencentes a essa categoria
});

export default categoriesSchema;