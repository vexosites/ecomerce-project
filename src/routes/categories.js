import express from "express";
import upload from "../middlewares/multerUpload.js";
import CategoriesController from "../controllers/products.js";

const Router = express.Router();

Router.post('/', upload.array('file'), CategoriesController.post.bind(ProductController));

Router.get('/category/:id', CategoriesController.get.bind(ProductController));

export default Router;