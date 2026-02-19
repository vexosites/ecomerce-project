import usersService from "../services/usersService.js";
import usersValidator from "../validators/usersValidator.js";

class UserController {
  constructor(controller) {
    this.Controller = controller;
  }

  async post(req, res) {
    // chama o método handle do Controller
    return await this.Controller(req, res, usersValidator.post.bind(usersValidator), usersService.post.bind(usersService));
  }

  async get(req, res) {
    return await this.Controller(req, res, usersValidator.get.bind(usersValidator), usersService.post.bind(usersService));
  }
}

import Controller from "../utils/controllerModelClass.js";

export default new UserController(Controller);