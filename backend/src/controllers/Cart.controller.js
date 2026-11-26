import { CartService } from "../services/Cart.service.js";

export class CartController {
    cartService = new CartService();
    createCart = async (req, res) => {
        const userid = req.user.id;

        const { productid, quantity } = req.body;
        try {
            const create = await this.cartService.createCart(userid, productid, quantity)
            res.status(200).json({
                message: "Product added to cart succesfully!",
                create
            })
        }
        catch (error) {
            res.status(404).send({
                message: error.message
            })
        }
    }
    getAllCarts = async (req, res) => {
        const userid = req.user.id;

        try {
            const get = await this.cartService.getAllCarts(userid)
            res.status(200).json({
                message: "You got your carts!",
                get
            })
        }
        catch (error) {
            res.status(404).send({
                message: error.message
            })
        }
    }
    updateProductQuantity = async (req, res) => {
        const userid = req.user.id;

        const { productid, quantity } = req.body;
        try {
            const update = await this.cartService.updateProductQuantity(userid, productid, quantity)
            res.status(200).json({
                message: "Product  is updated  succesfully!",
                update
            })
        }
        catch (error) {
            res.status(404).send({
                message: error.message
            })
        }
    }
    deleteProduct = async (req, res) => {
        const userid = req.user.id;

        const { productid } = req.body;
        try {
            const deleteProduct = await this.cartService.removeProduct(userid, productid)
            res.status(200).json({
                message: "Product  is deleted  succesfully!",
                deleteProduct
            })
        }
        catch (error) {
            res.status(404).send({
                message: error.message
            })
        }

    }
    SumProductprice = async (req, res) => {
        const userid = req.user.id;


        try {
            const sum = await this.cartService.SumProductprice(userid)
            res.status(200).json({
                message: "Product  calculation is  succesfull!",
                sum
            })
        }
        catch (error) {
            res.status(404).send({
                message: error.message
            })
        }

    }
    ClearCart = async (req, res) => {
        const userid = req.user.id;


        try {
            const clear = await this.cartService.clearCart(userid)
            res.status(200).json({
                message: "Cart cleared successfully!",
                clear
            })
        }
        catch (error) {
            res.status(404).send({
                message: error.message
            })
        }

    }

}