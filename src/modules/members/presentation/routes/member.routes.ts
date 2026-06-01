import { Router } from "express";
import { MemberController } from "../controllers/MemberController.js";
import { PrismaMemberRepository } from "../../infrastructure/repositories/PrismaMemberRepository.js";
import { GetCommunityUseCase } from "../../application/use-cases/GetCommunityUseCase.js";

const router = Router();

const repo = new PrismaMemberRepository();
const getCommunityUseCase = new GetCommunityUseCase(repo);
const controller = new MemberController(getCommunityUseCase);

router.get("/", (req, res) => controller.getCommunity(req, res));

export { router as memberRoutes };
