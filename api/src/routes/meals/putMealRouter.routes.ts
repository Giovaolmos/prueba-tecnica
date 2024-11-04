import { Router } from "express";
import { validateIdMiddleware } from "../../middlewares/meal/validateId.middleware";
import { validateMealUpdate } from "../../middlewares/meal/updateMeal.middleware";
import { updateMealController } from "../../controller/meal/updateMeals.controller";
export const putMealRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Comidas
 *   description: API para gestionar comidas
 */

/**
 * @swagger
 * /meals/put/{id}:
 *   put:
 *     summary: Actualizar una comida
 *     description: Permite actualizar los datos de una comida existente utilizando su ID.
 *     tags: [Comidas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la comida a actualizar.
 *         schema:
 *           type: string
 *           example: "60b8d45f4d2f5c3f5c8d45ab"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Roti john"
 *               description:
 *                 type: string
 *                 example: "Mix all the ingredients in a bowl.\r\nHeat a pan or griddle with a little vegetable oil.\r\nPour the mixture onto the pan and place a piece of open-faced baguette on top.\r\nPress on the bread with a spatula and grill for 2 minutes.\r\nTurn the bread over to make it a little crispy.\r\nRemove from pan and cut the bread into small portions.\r\nAdd mayonnaise and/or Sambal before cutting the sandwich (optional)."
 *               imageUrl:
 *                 type: string
 *                 example: "https://www.themealdb.com/images/media/meals/hx335q1619789561.jpg"
 *               category:
 *                 type: string
 *                 example: "Beef"
 *     responses:
 *       200:
 *         description: Comida actualizada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: "Ensalada César"
 *                 description:
 *                   type: string
 *                   example: "Ensalada con lechuga, crutones y queso parmesano."
 *                 imageUrl:
 *                   type: string
 *                   example: "https://example.com/ensalada.jpg"
 *                 category:
 *                   type: string
 *                   example: "Ensaladas"
 *       400:
 *         description: ID inválido o datos insuficientes para actualizar.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "estructura de ID: 60b8d45f4d2f5c3f5c8d45ab inválida"
 *       404:
 *         description: Comida no encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No se encontró la comida para actualizar"
 *       500:
 *         description: Error en el servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al actualizar la comida"
 *                 error:
 *                   type: string
 *                   example: "Descripción del error"
 */
putMealRouter.put(
  "/put/:id",
  validateIdMiddleware,
  validateMealUpdate,
  updateMealController,
);
