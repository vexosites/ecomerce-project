import Controller from "../utils/controllerModelClass.js";

class CategoriesController {
  constructor(ControllerModelInstancePost) {
    this.ControllerModelInstancePost = ControllerModelInstancePost;
  }
  async post(req, res) {
    return await this.ControllerModelInstancePost.handle(req, res);
  }
}

import categoriesService from "../services/categoriesService.js";
import categoriesValidator from "../validators/categoriesValidator.js";

const ControllerModelInstancePost = new Controller({
  validator: categoriesValidator.post.bind(categoriesValidator),
  service: categoriesService.post.bind(categoriesService),
});

export default new CategoriesController(
  ControllerModelInstancePost
);
