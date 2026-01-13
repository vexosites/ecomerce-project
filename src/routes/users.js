import express from "express";
import UsersController from "../controllers/users/users.js";

const Router = express.Router()

Router.post('/', UsersController.post.bind(UsersController));

export default Router;