import { Request, Response } from "express";
import { GetCommunityUseCase } from "../../application/use-cases/GetCommunityUseCase.js";
import { successResponse } from "@/shared/http/success-response.js";

export class MemberController {
  constructor(private readonly getCommunityUseCase: GetCommunityUseCase) {}

  async getCommunity(req: Request, res: Response): Promise<void> {
    const data = await this.getCommunityUseCase.execute();

    successResponse(res, data);
  }
}
