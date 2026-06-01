import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

import { ValidationException } from "@/core/exceptions/ValidationException.js";

export const validateRequest =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const parsedBody = {
      ...req.body,
    };

    const result = schema.safeParse(parsedBody);

    if (!result.success) {
      const details = result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));

      return next(new ValidationException(details));
    }

    req.body = result.data;

    next();
  };
