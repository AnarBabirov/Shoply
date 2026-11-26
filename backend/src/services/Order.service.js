import Cart from "../models/Cart.model.js";
import Order from "../models/Order.model.js";
export class OrderService {

    async createOrder(userid) {
        const cart = await Cart.findOne({ owner: userid }).populate({
            path: "products",
            populate: {
                path: "product"
            }
        })
        if (!cart) {
            throw new Error("Cart not found!");
        }
        if (cart.products.length === 0) {
            throw new Error("Nothing to order!")
        }

        const calculatePrice = cart.products.reduce((acc, item) => {
            return acc + (item.product.price * item.quantity)
        }, 0);
        const orderProducts = cart.products.map(product =>
        (
            {
                product: product.product._id,
                quantity: product.quantity,
                price: product.product.price,

            }
        )

        )
        const orderProduct = await Order.create({
            orderedBy: userid,
            products: orderProducts,
            totalPrice: calculatePrice,
            status: "pending"
        });

        await Cart.findOneAndUpdate({ owner: userid }, {
            $set: {
                products: []
            }


        }, {
            returnDocument: "after",
            runValidators: true
        })



        return orderProduct;

    }
    async getMyOrders(userid) {
        const getMyOrders = await Order.find({ orderedBy: userid }).sort({ createdAt: -1 })
        if (getMyOrders.length === 0) {
            throw new Error("You did not order anything!")

        }
        return getMyOrders
    }
    async getOrderById(orderid, userid) {
        const getOrderById = await Order.findOne({ _id: orderid, orderedBy: userid })
        if (!getOrderById) {
            throw new Error("No order found!")
        }
        return getOrderById;

    }
    async updateOrderStatus(orderid, status) {
        const updateStatus = await Order.findOneAndUpdate({ _id: orderid }, {
            $set: { status }
        }, { returnDocument: "after", runValidators: true })

        if (!updateStatus) {
            throw new Error("Order does not exist");

        }
        return updateStatus

    }
    async cancelOrder(orderid, userid) {
        const order = await Order.findOne({ _id: orderid, orderedBy: userid })
        if (!order) {
            throw new Error("Order does not exist!")
        }
        
        if (order.status === "completed") {
            throw new Error("You cant cancel order")
        }
        if (order.status === "cancelled") {
            throw new Error("Order is already cancelled!");
        }

        order.status = "cancelled";
        await order.save();
    
        return order;
    }

}