import AppError from "../errors/UserError.js";

class ProductService{
constructor(ProductRepository, imgsService, ImagesRepository){
    this.ProductRepository = ProductRepository
    this.ImagesRepository = ImagesRepository
    this.imgsService = imgsService
}
async post(validator){
try {
    const { name, categoryId, description, price, stock, active, slug } = validator;

    const product = await this.ProductRepository.postProductBase({
        name,
        categoryId,
        price,
        description,
        stock,
        active,
        slug
    });

    const imgs = await this.imgsService.postArray(validator.imgs);

    const imgs_model = imgs.map(i => {
       return { url: i.url, productId: product.id };
})

    const img = await this.ImagesRepository.PostImages(imgs_model);

    return {
        product,
        img
    };
} catch (error) {
    if(error.code === 'P2002'){
        throw new AppError('product already exists', 401);
    }
    if(error.code === 'P2003'){
        throw new AppError('invalid category', 404);
    }
    console.log(error)
    throw error;
}
}
async get(categoryId){
    try {
        const products = await this.ProductRepository.getProductsByCategoryId(categoryId);
        if(!products.length){
            throw new AppError('invalid category', 404)
        }
        return products;
    } catch (error) {
        if(error.code === 'P2003'){
            throw new AppError('invalid category', 404);
        }
        throw error
    }
}
}

import ProductRepository from "../repositories/ProductsRepository.js";
import ImagesServices from "./imgsService.js"
import ImagesRepository from "../repositories/ImagesRepository.js";

export default new ProductService(ProductRepository, ImagesServices, ImagesRepository);