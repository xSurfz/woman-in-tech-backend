import { Request, Response } from "express";
import { GetInterestsUseCase } from "@/modules/interests/application/use-cases/GetInterestsUseCase.js";
import { CreateInterestUseCase } from "@/modules/interests/application/use-cases/CreateInterestUseCase.js";
import { UpdateInterestUseCase } from "@/modules/interests/application/use-cases/UpdateInterestUseCase.js";
import { DeleteInterestUseCase } from "@/modules/interests/application/use-cases/DeleteInterestUseCase.js";

import { successResponse } from "@/shared/http/success-response.js";

export class AdminInterestController {
  constructor(
    private readonly getInterestsUseCase: GetInterestsUseCase,
    private readonly createInterestUseCase: CreateInterestUseCase,
    private readonly updateInterestUseCase: UpdateInterestUseCase,
    private readonly deleteInterestUseCase: DeleteInterestUseCase,
  ) {}

  async getAll(
    req: Request,
    res: Response,
  ): Promise<void> {
    const interests =
      await this.getInterestsUseCase.execute();
  
    successResponse(res, interests);
  }

  async create(req: Request, res: Response): Promise<void> {
    const interest = await this.createInterestUseCase.execute(req.body);

    successResponse(res, interest, 201);
  }

  async update(req: Request, res: Response): Promise<void> {
    const id = String(req.params.id);

    const interest = await this.updateInterestUseCase.execute(id, req.body);

    successResponse(res, interest);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const id = String(req.params.id);

    await this.deleteInterestUseCase.execute(id);

    successResponse(res, null);
  }
}
