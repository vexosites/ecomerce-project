import AppError from "../errors/UserError.js";

class ProductsValidator{
post(req){
    const product =
    typeof req.body.product === "string"
      ? JSON.parse(req.body.product)
      : req.body.product;
  
    const { name, description, price, active, stock, categoryId, slug } = product;  

    const imgs = req.files;

    console.log(imgs)
    if(!name || !description || !price || !active || !stock || !categoryId){
        throw new AppError("invalid body", 400)
    }
    return { name, description, price, active, stock, categoryId, slug, imgs};
}
get(req){
    return parseInt(req.params.id);
}
}

export default new ProductsValidator()