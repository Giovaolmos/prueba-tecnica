import mongoose from "mongoose";
import { preLoadMeals } from "../services/api/preloadMeals";
import { preLoadUserTest } from "../services/api/preloadUser";

export const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conexión a la base de datos establecida.");
    await preLoadMeals();
    await preLoadUserTest();
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
};
