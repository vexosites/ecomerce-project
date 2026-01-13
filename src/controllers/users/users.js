import Controller from "../../utils/controllerModelClass.js";
import usersService from "../../services/usersService.js";
import usersValidator from "../../validators/usersValidator.js";

class UserController {
  constructor(controllerInstance) {
    this.ControllerModelPost = controllerInstance;
  }

  async post(req, res) {
    // chama o método handle do Controller
    return this.ControllerModelPost.handle(req, res);
  }
}

// cria uma instância do Controller passando validator e service
const userControllerInstance = new Controller({
  validator: usersValidator.post,
  service: usersService,
});

// exporta o UserController com a instância injetada
export default new UserController(userControllerInstance);
