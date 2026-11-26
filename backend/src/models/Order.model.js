import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    orderedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    products: [

        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },


            quantity: {
                type: Number,
                required: true,
                min: 1,
            },
            price: {
                type: Number,
                required: true,
                min: 1,
            },


        },


    ],
    totalPrice: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        enum: ["pending", "in-process", "completed", "cancelled"],
        default: "pending"
    }



}, { timestamps: true, collection: "orders" })
const Order = mongoose.model("Order", orderSchema);
export default Order;