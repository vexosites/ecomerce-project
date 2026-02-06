import Controller from "../utils/controllerModelClass.js";

class ProductController {
  constructor(ControllerModelInstancePost, ControllerModelInstanceGet) {
    this.ControllerModelInstancePost = ControllerModelInstancePost;
  }
  async post(req, res) {
    return await this.ControllerModelInstancePost.handle(req, res);
  }
}

import categoriesService from "../services/productsService.js";
import categoriesValidator from "../validators/productsValidator.js";

const ControllerModelInstancePost = new Controller({
  validator: categoriesValidator.post.bind(productsValidator),
  service: categoriesService.post.bind(productsService),
});

export default new ProductController(
  ControllerModelInstancePost
);
