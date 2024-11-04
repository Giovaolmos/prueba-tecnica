import { Router } from "express";
import { validateIdMiddleware } from "../../middlewares/meal/validateId.middleware";
import { deleteMealController } from "../../controller/meal/deleteMeals.controller";
export const deleteMealRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Comidas
 *   description: API para gestionar comidas
 */

/**
 * @swagger
 * /meals/delete/{id}:
 *   delete:
 *     summary: Eliminar una comida
 *     description: Elimina una comida específica mediante su ID.
 *     tags: [Comidas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la comida a eliminar.
 *         schema:
 *           type: string
 *           example: "60b8d45f4d2f5c3f5c8d45ab"
 *     responses:
 *       204:
 *         description: Comida eliminada exitosamente, sin contenido en la respuesta.
 *       400:
 *         description: ID inválido.
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
 *                   example: "No se encontró la comida con el ID: 60b8d45f4d2f5c3f5c8d45ab"
 *       500:
 *         description: Error en el servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al eliminar la comida"
 */
deleteMealRouter.delete(
  "/delete/:id",
  validateIdMiddleware,
  deleteMealController,
);
