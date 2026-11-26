import {Router} from "express";
import { OrderController } from "../controllers/Order.Controller.js";
import {AuthMiddleWare} from "../middlewares/AuthMiddleWare.js";
import { AdminMiddleWare } from "../middlewares/AuthMiddleWare.js";

const orderController=new OrderController();
const orderRouter=Router();
orderRouter.post("/order",AuthMiddleWare,orderController.createOrder);
orderRouter.get("/myOrders",AuthMiddleWare,orderController.getMyOrders);
orderRouter.get("/:orderid",AuthMiddleWare,orderController.getOrdersById);
orderRouter.patch( "/:orderid/status",AuthMiddleWare,AdminMiddleWare, orderController.updateStatusById);
orderRouter.patch("/:orderid/cancel",AuthMiddleWare,orderController.cancelOrder);
export default orderRouter;