import {Router} from "express";
import { ProductController } from "../controllers/Product.controller.js";

const productRouter=Router();
const productController=new ProductController();

productRouter.post("/createProduct",productController.createProduct);
productRouter.get("/getAllProducts",productController.getAllProducts);
productRouter.get("/:id",productController.getProductById);
productRouter.delete("/deleteProduct/:id",productController.deleteProduct);
export default productRouter;