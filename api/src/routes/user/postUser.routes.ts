import { Router } from "express";
import { createUserController } from "../../controller/user/postUser.controller";
import { validateUserData } from "../../middlewares/user/createUser.middleware";

export const postRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: API para gestionar usuarios
 */

/**
 * @swagger
 * /user/post:
 *   post:
 *     summary: Crear un nuevo usuario
 *     description: Permite crear un nuevo usuario proporcionando los datos necesarios.
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *               confirmPassword:
 *                 type: string
 *                 example: password123
 *               name:
 *                 type: string
 *                 example: User Test
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuario creado exitosamente."
 *                 user:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "User Test"
 *                     email:
 *                       type: string
 *                       example: "user@example.com"
 *       400:
 *         description: Error en los datos del usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error: El email ya está en uso."
 *                 missingFields:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["name", "email", "password", "confirmPassword"]
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error al crear el usuario"
 *                 error:
 *                   type: string
 *                   example: "Error: Información del error"
 */
postRouter.post("/post", validateUserData, createUserController);
