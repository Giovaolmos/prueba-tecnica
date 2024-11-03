import express from "express";
import cors from "cors";
import morgan from "morgan";
import { indexRouter } from "./routes/indexRouter.routes";
import { swaggerConfig } from "./config/swaggerConfig";

export const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
server.use(indexRouter);
swaggerConfig(server);
