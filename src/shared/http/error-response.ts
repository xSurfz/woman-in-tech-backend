import { Response } from "express";

export const errorResponse = (
  res: Response,
  message: string,
  statusCode = 500,
): Response => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};
