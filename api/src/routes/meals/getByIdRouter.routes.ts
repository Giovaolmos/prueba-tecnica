import { Router } from "express";
import { validateIdMiddleware } from "../../middlewares/meal/validateId.middleware";
import { getMealByIdController } from "../../controller/meal/getsMeals.controller";

export const getByIdRouter = Router();

/**
 * @swagger
 * /meals/{id}:
 *   get:
 *     summary: Obtener comida por ID
 *     description: Permite obtener una comida específica utilizando su ID.
 *     tags: [Comidas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la comida a obtener.
 *         schema:
 *           type: string
 *           example: "60b8d45f4d2f5c3f5c8d45ab"
 *     responses:
 *       200:
 *         description: Comida obtenida exitosamente.
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
 *         description: Estructura de ID inválida.
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
 *                   example: "No se encontró la comida con el ID solicitado"
 */

getByIdRouter.get("/:id", validateIdMiddleware, getMealByIdController);
