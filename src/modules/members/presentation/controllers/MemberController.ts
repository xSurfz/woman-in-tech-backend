import { Request, Response } from "express";
import { GetMemberUseCase } from "../../application/use-cases/GetMemberUseCase.js";
import { successResponse } from "@/shared/http/success-response.js";

export class MemberController {
  constructor(private readonly getCommunityUseCase: GetMemberUseCase) {}

  async getCommunity(req: Request, res: Response): Promise<void> {
    const data = await this.getCommunityUseCase.execute();

    successResponse(res, data);
  }
}
