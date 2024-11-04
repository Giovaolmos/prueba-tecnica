import { Express } from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

export const swaggerConfig = (app: Express) => {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "The meal DB",
        version: "1.0.0",
        description: "Esta es una API restful basada en la themealdb",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./src/routes/**/*.ts", "./src/models/*.ts"],
  };

  const swaggerDocs = swaggerJsDoc(options);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
