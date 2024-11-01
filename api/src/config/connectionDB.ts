import mongoose from "mongoose";
import { MONGO_URI } from "./envs";

export const connectionDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    throw new Error(`MONGO_URI inválida. ${error}`);
  }
};
