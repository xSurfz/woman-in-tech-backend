import { Request, Response } from "express";

import { CreateProgramUseCase } from "@/modules/programs/application/use-cases/CreateProgramUseCase.js";
import { UpdateProgramUseCase } from "@/modules/programs/application/use-cases/UpdateProgramUseCase.js";
import { DeleteProgramUseCase } from "@/modules/programs/application/use-cases/DeleteProgramUseCase.js";

import { successResponse } from "@/shared/http/success-response.js";

export class AdminProgramController {
  constructor(
    private readonly createProgramUseCase: CreateProgramUseCase,
    private readonly updateProgramUseCase: UpdateProgramUseCase,
    private readonly deleteProgramUseCase: DeleteProgramUseCase,
  ) {}

  async create(req: Request, res: Response): Promise<void> {
    const program = await this.createProgramUseCase.execute(req.body);

    successResponse(res, program, 201);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    const program = await this.updateProgramUseCase.execute(id, req.body);

    successResponse(res, program);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    await this.deleteProgramUseCase.execute(id);

    successResponse(res, null);
  }
}
