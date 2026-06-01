import { Request, Response } from "express";

import { GetProgramsUseCase } from "@/modules/programs/application/use-cases/GetProgramsUseCase.js";

import { successResponse } from "@/shared/http/success-response.js";

export class ProgramController {
  constructor(private readonly getProgramsUseCase: GetProgramsUseCase) {}

  async getPrograms(req: Request, res: Response): Promise<void> {
    const programs = await this.getProgramsUseCase.execute();

    successResponse(res, programs);
  }
}
