import { Router } from "express";
import { AuthController } from "../controllers/AuthController.js";
import { LoginUseCase } from "../../application/use-cases/LoginUseCase.js";
import { authMiddleware } from "@/core/middleware/auth.middleware.js";
import { asyncHandler } from "@/shared/utils/async-handler.js";
const router = Router();

const loginUseCase = new LoginUseCase();
const authController = new AuthController(loginUseCase);

router.post("/login", (req, res) => authController.login(req, res));
router.post("/logout", (req, res) => authController.logout(req, res));
router.get(
  "/me",
  authMiddleware,
  asyncHandler(authController.me.bind(authController)),
);

export { router as authRoutes };
