import Controller from "../../utils/controllerModelClass.js";

class ProductController{
constructor(ControllerModelInstancePost, ControllerModelInstanceGet){
this.ControllerModelInstancePost = ControllerModelInstancePost;
this.ControllerModelInstanceGet = ControllerModelInstanceGet;
}
async post(req, res){
    return await this.ControllerModelInstancePost.handle(req, res);
}
async get(req, res){
    return await this.ControllerModelInstanceGet.handle(req, res);
}
}

import productsService from "../../services/productsService.js";
import productsValidator from "../../validators/productsValidator.js"

const ControllerModelInstancePost = new Controller({validator: productsValidator.post.bind(productsValidator), service: productsService.post.bind(productsService)});

const ControllerModelInstanceGet = new Controller({validator: productsValidator.get.bind(productsValidator), service: productsService.get.bind(productsService)});

export default new ProductController(ControllerModelInstancePost, ControllerModelInstanceGet);