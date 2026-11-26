import {Router} from "express";
import { CartController } from "../controllers/Cart.controller.js";
import {AuthMiddleWare} from "../middlewares/AuthMiddleWare.js";


const cartController=new CartController();
const cartRouter=Router();
cartRouter.post("/add",AuthMiddleWare,cartController.createCart);
cartRouter.get("/getAllCarts",AuthMiddleWare,cartController.getAllCarts);
cartRouter.put("/updateProductQuantity",AuthMiddleWare,cartController.updateProductQuantity);
cartRouter.delete("/deleteProduct",AuthMiddleWare,cartController.deleteProduct);
cartRouter.get("/sumPrice",AuthMiddleWare,cartController.SumProductprice);
cartRouter.put("/clearCart",AuthMiddleWare,cartController.ClearCart);
export default cartRouter;

