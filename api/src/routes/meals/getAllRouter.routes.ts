import { Router } from "express";
import { getAllMealsController } from "../../controller/meal/getsMeals.controller";
export const getAllRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Comidas
 *   description: API para gestionar comidas
 */

/**
 * @swagger
 * /meals/get:
 *   get:
 *     summary: Obtener todas las comidas
 *     description: Obtiene una lista paginada de todas las comidas disponibles.
 *     tags: [Comidas]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Número de la página de resultados.
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         description: Cantidad de comidas por página.
 *     responses:
 *       200:
 *         description: Lista de comidas obtenida exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Meal'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *       404:
 *         description: No se encontraron comidas.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No se encontraron comidas"
 *       500:
 *         description: Error en el servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al obtener las comidas"
 */

getAllRouter.get("/get", getAllMealsController);
