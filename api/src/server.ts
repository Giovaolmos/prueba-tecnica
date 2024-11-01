import express from "express";
import cors from "cors";
import morgan from "morgan";

export const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
