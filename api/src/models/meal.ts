import { model, Schema } from "mongoose";

const mealSchema = new Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 50 },
  description: { type: String, required: true, minlength: 10, maxlenght: 2500 },
  imageUrl: { type: String, required: true, maxlenght: 200 },
  category: { type: String, required: true },
});

export const Meal = model("Meal", mealSchema);
