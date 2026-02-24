import express from "express";
import users from "./routes/users.js";
import products from "./routes/products.js";
import categories from "./routes/categories.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.get("/", (req, res) => res.send("Server running!"));

app.use("/users", users);

app.use("/products", products);

app.use("/categories", categories);

export default app;
