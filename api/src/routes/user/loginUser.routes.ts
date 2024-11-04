import { Router } from "express";
import { validateLoginData } from "../../middlewares/user/validateLoginData.middleware";
import { loginUserController } from "../../controller/user/loginUser.controller";

export const loginRouter = Router();

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Login de usuario
 *     description: Permite a un usuario iniciar sesión proporcionando email y contraseña.
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
 *     responses:
 *       200:
 *         description: Login exitoso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Login exitoso"
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR..."
 *       400:
 *         description: Error de autenticación.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Email y/o contraseña incorrectos."
 *                 missingFields:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["email", "password"]
 *       500:
 *         description: Error interno del servidor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hubo un error inesperado al intentar iniciar sesión."
 *                 error:
 *                   type: string
 *                   example: "Error: Información del error."
 */
loginRouter.post("/login", validateLoginData, loginUserController);
