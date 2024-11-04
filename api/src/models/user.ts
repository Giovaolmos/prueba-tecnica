import { Schema, model } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           minLength: 2
 *           maxLength: 50
 *           example: "User Example"
 *         email:
 *           type: string
 *           format: email
 *           example: "user@example.com"
 *         password:
 *           type: string
 *           minLength: 8
 *           maxLength: 50
 *           example: "password123"
 *         isAdmin:
 *           type: boolean
 *           default: false
 *       required:
 *         - name
 *         - email
 *         - password
 */

const userSchema = new Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 50 },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, minlength: 8, maxlength: 50 },
  isAdmin: { type: Boolean, default: false },
});

export const Users = model("Users", userSchema);
