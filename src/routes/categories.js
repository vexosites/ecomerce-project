import express from "express";
import CategoriesController from "../controllers/categories.js";

const Router = express.Router();

Router.post('/', CategoriesController.post.bind(CategoriesController));

export default Router;