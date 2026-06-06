import express, { type Express, type Request, type Response } from "express";
import { eventRoutes } from "@/modules/events/presentation/routes/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "@/core/middleware/error-handler.middleware.js";
import { notFoundMiddleware } from "@/core/middleware/not-found.middleware.js";
import { adminRoutes } from "./modules/admin/admin.routes.js";
import { memberRoutes } from "./modules/members/presentation/routes/member.routes.js";
import { authRoutes } from "./modules/auth/presentation/routes/auth.routes.js";
import { programRoutes } from "./modules/programs/presentation/routes/program.routes.js";
import { resourceRoutes } from "@/modules/resources/presentation/routes/resource.routes.js";
import { testimonialRoutes } from "@/modules/testimonials/presentation/routes/testimonial.routes.js";
import { interestRoutes } from "./modules/interests/presentation/routes/interest.routes.js";
import path from "node:path";
const app: Express = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Permite explícitamente a tu frontend
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.get("/health", (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    message: "API running",
  });
});
app.use("/api/events", eventRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/community", memberRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/programs", programRoutes);
app.use("/api/resources", resourceRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/interests", interestRoutes);
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(notFoundMiddleware);

app.use(errorHandler);

export { app };
