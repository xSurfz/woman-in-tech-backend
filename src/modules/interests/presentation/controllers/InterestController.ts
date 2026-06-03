import { Request, Response } from "express";

import { GetInterestsUseCase } from "@/modules/interests/application/use-cases/GetInterestsUseCase.js";

import { successResponse } from "@/shared/http/success-response.js";

export class InterestController {
  constructor(private readonly getInterestsUseCase: GetInterestsUseCase) {}

  async getInterests(req: Request, res: Response): Promise<void> {
    const interests = await this.getInterestsUseCase.execute();

    successResponse(res, interests);
  }
}
