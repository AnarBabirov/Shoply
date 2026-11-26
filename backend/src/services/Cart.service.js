import Cart from "../models/Cart.model.js";
import Product from "../models/Product.model.js";


export class CartService {

    async createCart(userid, productid, quantity) {
        const cart = await Cart.findOne({ owner: userid });

        const existProduct = await Product.findById(productid);

        if (!existProduct) {
            throw new Error("Product does not exist!");
        }


        if (!cart) {
            return await Cart.create({
                owner: userid,
                products: [
                    {
                        product: productid,
                        quantity
                    }
                ]
            });
        }


        const findProduct = cart.products.find(
            item => item.product.toString() === productid.toString()
        );

        if (findProduct) {

            findProduct.quantity += quantity;
        } else {

            cart.products.push({
                product: productid,
                quantity
            });
        }

        return await cart.save();
    }
    async getAllCarts(userid) {
        const getAll = await Cart.findOne({ owner: userid }).populate({
            path: "products",
            populate: {
                path: "product"
            }
        })
        if (!getAll) {
            throw new Error("No carts for this user ")
        }
        return getAll;

    }

    async updateProductQuantity(userid, productid, quantity) {
        if (typeof quantity !== "number" || Number.isNaN(quantity) || quantity < 1) {
            throw new Error("Quantity must be a number greater than or equal to 1");
        }

        const cart = await Cart.findOne({ owner: userid });
        if (!cart) {
            throw new Error("Cart not found for this user");
        }

        const existProduct = await Product.findById(productid);
        if (!existProduct) {
            throw new Error("Product does not exist!");
        }

        const updatedCart = await Cart.findOneAndUpdate(
            { owner: userid, "products.product": productid },
            {
                $set: {
                    "products.$.quantity": quantity,
                },
            },
            {
                returnDocument: "after",
                runValidators: true,
            }
        );

        if (!updatedCart) {
            throw new Error("Product is not in the cart");
        }

        return updatedCart;
    }
    async removeProduct(userid, productid) {
        const cart = await Cart.findOne({ owner: userid });
        if (!cart) {
            throw new Error("Cart not found for this user");
        }

        const existProduct = await Product.findById(productid);
        if (!existProduct) {
            throw new Error("Product does not exist!");
        }
        const deleteProduct = await Cart.findOneAndUpdate({ owner: userid, "products.product": productid }, {
            $pull: { products: { product: productid } }
        }, { returnDocument: "after" })
        if (!deleteProduct) {
            throw new Error("Product is not in the cart");
        }
        return deleteProduct;

    }

    async SumProductprice(userid) {


        const productInfo = await Cart.findOne({ owner: userid }).populate({

            path: "products",
            populate: {
                path: "product"
            }
        })
        if (!productInfo) {
            throw new Error("Cart not found");
        }
        const sumTotal = productInfo.products.reduce((acc, item) => {
            return acc + (item.product.price * item.quantity)
        }, 0);

        return sumTotal

    }
    async clearCart(userid) {
        const cart = await Cart.findOneAndUpdate({ owner: userid }, {
            $set: {
                products: []
            }

        }, {
            returnDocument: "after",
            runValidators: true
        });
        if (!cart) {
            throw new Error("Cart not found for this user");
        }
        return cart;

    }



}