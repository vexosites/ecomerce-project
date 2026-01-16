import Controller from "../../utils/controllerModelClass.js";
import usersService from "../../services/usersService.js";
import usersValidator from "../../validators/usersValidator.js";

class UserController {
  constructor(controllerInstancePost, controllerInstanceGet) {
    this.ControllerModelPost = controllerInstancePost;
    this.ControllerModelGet = controllerInstanceGet
  }

  async post(req, res) {
    // chama o método handle do Controller
    return await this.ControllerModelPost.handle(req, res);
  }

  async get(req, res) {
    return await this.ControllerModelGet.handle(req, res);
  }
}

// cria uma instância do Controller passando validator e service
const userControllerInstancePost = new Controller(
{
  validator: usersValidator.post,
  service: usersService.post.bind(usersService)
}
);


const userControllerInstanceGet = new Controller(
{
  validator: usersValidator.get,
  service: usersService.get.bind(usersService)
}
);


// exporta o UserController com a instância injetada
export default new UserController(userControllerInstancePost, userControllerInstanceGet);