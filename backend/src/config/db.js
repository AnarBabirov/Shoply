import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${connect.connection.host}`);
    return connect;
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
export default ConnectDB;
