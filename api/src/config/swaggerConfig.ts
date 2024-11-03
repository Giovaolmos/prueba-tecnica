import { Express } from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

export const swaggerConfig = (app: Express) => {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Prueba Técnica",
        version: "1.0.0",
        description: "Este es un proyecto para una prueba técnica.",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./src/routes/*.ts", "./src/controllers/*.ts"],
  };

  const swaggerDocs = swaggerJsDoc(options);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
