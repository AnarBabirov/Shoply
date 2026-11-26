import { OrderService } from "../services/Order.service.js";
export class OrderController {
    orderService = new OrderService();

    createOrder = async (req, res) => {

        const userid = req.user.id;

        try {
            const create = await this.orderService.createOrder(userid)
            res.status(201).json({
                message: "Order created succesfully!",
                create
            })
        }
        catch (error) {
            res.status(404).send({
                message: error.message
            })
        }

    }
    getMyOrders = async (req, res) => {

        const userid = req.user.id;

        try {
            const getOrder = await this.orderService.getMyOrders(userid)
            res.status(200).json({
                message: "Order retrieved succesfully!",
                getOrder
            })
        }
        catch (error) {
            res.status(404).send({
                message: error.message
            })
        }

    }
    getOrdersById = async (req, res) => {
        const { orderid } = req.params;
        const userid = req.user.id;

        try {
            const getById = await this.orderService.getOrderById(orderid, userid)
            res.status(200).json({
                message: "Order retrieved succesfully!",
                getById
            })
        }
        catch (error) {
            res.status(404).send({
                message: error.message
            })
        }

    }
    updateStatusById = async (req, res) => {
        const { orderid } = req.params;
        const { status } = req.body;

        try {
            const updateStatus = await this.orderService.updateOrderStatus(orderid, status)
            res.status(200).json({
                message: "Status changed succesfully!",
                updateStatus
            })
        }
        catch (error) {
            res.status(404).send({
                message: error.message
            })
        }

    }
    cancelOrder = async (req, res) => {
        const { orderid } = req.params;
        const  userid  = req.user.id;
        

        try {
            const cancel = await this.orderService.cancelOrder(orderid, userid)
            res.status(200).json({
                message: "Order cancelled  succesfully!",
                cancel
            })
        }
        catch (error) {
            res.status(404).send({
                message: error.message
            })
        }

    }
}