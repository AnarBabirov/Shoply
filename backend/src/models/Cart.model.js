import mongoose from "mongoose";

const cartSchema = mongoose.Schema({

    owner: {
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
            }
        }
    ]

}, { timestamps: true, collection: "Carts" });

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;