import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./config/db.js";
import router from "./routes/User.router.js";
import productRouter from "./routes/Product.router.js";
import cartRouter from "./routes/Cart.router.js";
import orderRouter from "./routes/Order.routes.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/users",router);
app.use("/products",productRouter);
app.use("/carts",cartRouter);
app.use("/orders",orderRouter);

const StartServer = async () => {
  try {
    await ConnectDB();
    app.listen(PORT, () => {
      console.log(`Succesfully connected to the server in port ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
StartServer();
