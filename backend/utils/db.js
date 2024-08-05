import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  mongoose.connect(MONGO_URI, {});
  console.log("Mongo Connected");
};

export default connectDB;
