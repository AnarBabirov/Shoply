import {Router} from "express";
import { ProductController } from "../controllers/Product.controller.js";
import { AdminMiddleWare ,AuthMiddleWare } from "../middlewares/AuthMiddleWare.js";

const productRouter=Router();
const productController=new ProductController();

productRouter.post("/createProduct",AuthMiddleWare,AdminMiddleWare,productController.createProduct);
productRouter.get("/getAllProducts", productController.getAllProducts);
productRouter.get("/:id",productController.getProductById);
productRouter.put("/updateProduct/:id",AuthMiddleWare, AdminMiddleWare, productController.updateProduct);
productRouter.delete("/deleteProduct/:id",AuthMiddleWare, AdminMiddleWare,productController.deleteProduct);
export default productRouter;