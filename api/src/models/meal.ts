import { Schema, model } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Meal:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           minLength: 2
 *           maxLength: 50
 *           example: "Eton Mess"
 *         description:
 *           type: string
 *           minLength: 10
 *           maxLength: 2500
 *           example: "Purée half the strawberries in a blender. Chop the remaining strawberries, reserving four for decoration.\r\nWhip the double cream until stiff peaks form, then fold in the strawberry purée and crushed meringue. Fold in the chopped strawberries and ginger cordial, if using.\r\nSpoon equal amounts of the mixture into four cold wine glasses. Serve garnished with the remaining strawberries and a sprig of mint."
 *         imageUrl:
 *           type: string
 *           format: uri
 *           maxLength: 200
 *           example: "https://www.themealdb.com/images/media/meals/uuxwvq1483907861.jpg"
 *         category:
 *           type: string
 *           maxLength: 40
 *           example: "Dessert"
 *       required:
 *         - name
 *         - description
 *         - imageUrl
 *         - category
 */

const mealSchema = new Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 50 },
  description: { type: String, required: true, maxlength: 2500 },
  imageUrl: { type: String, required: true, maxlength: 200 },
  category: { type: String, required: true, maxlength: 40 },
});

export const Meal = model("Meal", mealSchema);
