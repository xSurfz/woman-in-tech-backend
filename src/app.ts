import express, { type Express, type Request, type Response } from "express";

import cors from "cors";

import { errorHandler } from "@/core/middleware/error-handler.middleware.js";
import { notFoundMiddleware } from "@/core/middleware/not-found.middleware.js";

const app: Express = express();

app.use(cors());

app.use(express.json());

app.get("/health", (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    message: "API running",
  });
});

app.use(notFoundMiddleware);

app.use(errorHandler);

export { app };
