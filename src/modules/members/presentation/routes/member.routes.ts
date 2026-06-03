import { Router } from "express";
import { MemberController } from "../controllers/MemberController.js";
import { PrismaMemberRepository } from "../../infrastructure/repositories/PrismaMemberRepository.js";
import { GetMemberUseCase } from "../../application/use-cases/GetMemberUseCase.js";

const router = Router();

const repo = new PrismaMemberRepository();
const getCommunityUseCase = new GetMemberUseCase(repo);
const controller = new MemberController(getCommunityUseCase);

router.get("/", (req, res) => controller.getCommunity(req, res));

export { router as memberRoutes };
