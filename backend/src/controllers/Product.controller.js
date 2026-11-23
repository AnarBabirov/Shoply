import { ProductService } from "../services/Product.service.js";
export class ProductController {
  productService = new ProductService();
  createProduct = async (req, res) => {
    const product = req.body;
    try {
      const create = await this.productService.createProduct(product);

      res.status(201).json({
        message: "Successfuly created product!",
        create,
      });
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  };
  getAllProducts = async (req, res) => {
    try {
      const find = await this.productService.getAllProducts();

      res.status(200).json({
        message: "Successfuly got all products!",
        find,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };
   getProductById = async (req, res) => {
    const {id}=req.params
    try {
      const get = await this.productService.getProductById(id);

      res.status(200).json({
        message: "Successfuly got a product!",
        get,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };
    updateProduct = async (req, res) => {
    const {id}=req.params
    const data=req.body;
    try {
      const update = await this.productService.updateProduct(id,data);

      res.status(200).json({
        message: "Successfuly updated a product!",
        update,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  };
  deleteProduct = async (req, res) => {
    const {id}=req.params;
    try {
      const deleteProduct = await this.productService.deleteProduct(id);

      res.status(200).json({
        message: "Successfuly deleted product!",
        deleteProduct,
      });
    } catch (error) {
      res.status(404).json({
        error: error.message,
      });
    }
  };
}
