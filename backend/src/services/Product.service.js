import Product from "../models/Product.model.js";
export class ProductService {
  async createProduct(product) {
    const { name, description, price, cost, img, category, stock } = product;
    const createProduct = await Product.create({
      name,
      description,
      price,
      cost,
      img,
      category,
      stock,
    });
    if (!createProduct) {
      throw new Error("Failed to create product");
    }

    return createProduct;
  }
  async getAllProducts() {
    const find = await Product.find();
    return find;
  }
  async getProductById(id) {
    const getProduct = await Product.findById(id);
    if (!getProduct) {
      throw new Error("Failed to get product!");
    }
    return getProduct;
  }
  async updateProduct(id, data) {
    const update = await Product.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          price: data.price,
          stock: data.stock,
          description: data.description,
        },
      },
      {
        returnDocument: "after",
        runValidators: true,
      },
    );
    if (!update) {
      throw new Error("No product found!");
    }
    return update;
  }
    async deleteProduct(id) {
    const deleteProduct = await Product.findByIdAndDelete(id);
    if (!deleteProduct) {
      throw new Error("Failed to delete product!");
    }
    return deleteProduct;
  }
  
}
