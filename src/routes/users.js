import express from "express";
import UsersController from "../controllers/users/users.js";

const Router = express.Router()

Router.post('/', UsersController.post.bind(UsersController));

Router.get('/:email/:password', UsersController.get.bind(UsersController));

export default Router;