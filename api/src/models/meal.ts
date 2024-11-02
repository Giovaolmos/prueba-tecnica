import { model, Schema } from "mongoose";
import { IMeal } from "../interfaces/meals";

const mealSchema = new Schema<IMeal>({
  name: { type: String, required: true, minlength: 2, maxlength: 50 },
  description: { type: String, required: true, minlength: 10 },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
});

export const Meal = model<IMeal>("Meal", mealSchema);
