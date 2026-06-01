import { NextFunction, Request, Response } from "express";

import { NotFoundError } from "@/core/errors/NotFoundError.js";

export const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  next(new NotFoundError(`Route ${req.originalUrl} not found`));
};
