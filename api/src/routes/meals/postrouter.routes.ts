import { Router } from "express";
import { createMealController } from "../../controller/meal/createMeals.controller";
import { validateMealData } from "../../middlewares/meal/createMeal.middleware";

export const postMealRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Comidas
 *   description: API para gestionar comidas
 */

/**
 * @swagger
 * /meals/post:
 *   post:
 *     summary: Crear una nueva comida
 *     description: Permite crear una nueva comida proporcionando los datos necesarios.
 *     tags: [Comidas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 minLength: 2
 *                 maxLength: 50
 *                 example: "Eton Mess"
 *               description:
 *                 type: string
 *                 minLength: 10
 *                 maxLength: 2500
 *                 example: "Purée half the strawberries in a blender. Chop the remaining strawberries, reserving four for decoration.\r\nWhip the double cream until stiff peaks form, then fold in the strawberry purée and crushed meringue. Fold in the chopped strawberries and ginger cordial, if using.\r\nSpoon equal amounts of the mixture into four cold wine glasses. Serve garnished with the remaining strawberries and a sprig of mint."
 *               imageUrl:
 *                 type: string
 *                 maxLength: 200
 *                 example: "https://www.themealdb.com/images/media/meals/uuxwvq1483907861.jpg"
 *               category:
 *                 type: string
 *                 example: "Dessert"
 *     responses:
 *       201:
 *         description: Comida creada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: "Pizza Margherita"
 *                 description:
 *                   type: string
 *                   example: "Una deliciosa pizza con salsa de tomate, mozzarella y albahaca."
 *                 imageUrl:
 *                   type: string
 *                   example: "https://example.com/pizza.jpg"
 *                 category:
 *                   type: string
 *                   example: "Plato Principal"
 *       400:
 *         description: Error en los datos de la comida.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Faltan los siguientes campos: name, description, imageUrl, category"
 *       500:
 *         description: Error inesperado al crear la comida.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al crear la comida"
 *                 error:
 *                   type: string
 *                   example: "Error específico si está disponible"
 */
postMealRouter.post("/post", validateMealData, createMealController);
