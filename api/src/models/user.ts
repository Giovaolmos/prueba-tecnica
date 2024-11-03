import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 50 },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, minlength: 8 },
  isAdmin: { type: Boolean, default: false },
});

export const Users = model("Users", userSchema);
