import express from "express";
import upload from "../middlewares/multerUpload.js";
import ProductController from "../controllers/products/products.js";

const Router = express.Router();

Router.post('/', upload.array('file'), ProductController.post.bind(ProductController));

Router.get('/category/:id', ProductController.get.bind(ProductController));

export default Router;