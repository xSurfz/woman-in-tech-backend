import { Request, Response } from "express";

import { CreateInterestUseCase } from "@/modules/interests/application/use-cases/CreateInterestUseCase.js";
import { UpdateInterestUseCase } from "@/modules/interests/application/use-cases/UpdateInterestUseCase.js";
import { DeleteInterestUseCase } from "@/modules/interests/application/use-cases/DeleteInterestUseCase.js";

import { successResponse } from "@/shared/http/success-response.js";

export class AdminInterestController {
  constructor(
    private readonly createInterestUseCase: CreateInterestUseCase,
    private readonly updateInterestUseCase: UpdateInterestUseCase,
    private readonly deleteInterestUseCase: DeleteInterestUseCase,
  ) {}

  async create(req: Request, res: Response): Promise<void> {
    const interest = await this.createInterestUseCase.execute(req.body);

    successResponse(res, interest, 201);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    const interest = await this.updateInterestUseCase.execute(id, req.body);

    successResponse(res, interest);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    await this.deleteInterestUseCase.execute(id);

    successResponse(res, null);
  }
}
