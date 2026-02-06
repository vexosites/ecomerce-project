import Controller from "../utils/controllerModelClass.js";

class ProductController {
  constructor(ControllerModelInstancePost, ControllerModelInstanceGet) {
    this.ControllerModelInstancePost = ControllerModelInstancePost;
    this.ControllerModelInstanceGet = ControllerModelInstanceGet;
  }
  async get(req, res) {
    try {
        a
    } catch (error) {}
  }
}

import productsService from "../services/productsService.js";
import productsValidator from "../validators/productsValidator.js";

const ControllerModelInstancePost = new Controller({
  validator: productsValidator.post.bind(productsValidator),
  service: productsService.post.bind(productsService),
});

const ControllerModelInstanceGet = new Controller({
  validator: productsValidator.get.bind(productsValidator),
  service: productsService.get.bind(productsService),
});

export default new ProductController(
  ControllerModelInstancePost,
  ControllerModelInstanceGet
);
