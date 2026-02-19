import express from "express";
import CategoriesController from "../controllers/categories.js";

const Router = express.Router();

Router.post('/', CategoriesController.post.bind(CategoriesController));

Router.get("/:id", CategoriesController.get.bind(CategoriesController));

export default Router;