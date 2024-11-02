import { model, Schema } from "mongoose";
import { IMeal } from "../interfaces/meals.interface";

const mealSchema = new Schema<IMeal>({
  name: { type: String, required: true },
  instructions: { type: String, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
});

export const Meal = model<IMeal>("Meal", mealSchema);
