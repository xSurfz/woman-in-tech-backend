import { Request, Response, NextFunction } from "express";
import { JwtService } from "@/modules/auth/infrastructure/services/JwtService.js";
import { UnauthorizedException } from "@/core/exceptions/UnauthorizedException.js";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const token = req.cookies?.token;

  if (!token) {
    return next(new UnauthorizedException());
  }

  try {
    const decoded = JwtService.verify(token);
    (req as any).user = decoded;

    next();
  } catch {
    return next(new UnauthorizedException());
  }
};
