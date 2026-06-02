import { Request, Response } from "express";

import { CreateProgramUseCase } from "@/modules/programs/application/use-cases/CreateProgramUseCase.js";
import { UpdateProgramUseCase } from "@/modules/programs/application/use-cases/UpdateProgramUseCase.js";
import { DeleteProgramUseCase } from "@/modules/programs/application/use-cases/DeleteProgramUseCase.js";
import { GetProgramsUseCase } from "@/modules/programs/application/use-cases/GetProgramsUseCase.js";
import { successResponse } from "@/shared/http/success-response.js";

export class AdminProgramController {
  constructor(
    private readonly getProgramsUseCase: GetProgramsUseCase,
    private readonly createProgramUseCase: CreateProgramUseCase,
    private readonly updateProgramUseCase: UpdateProgramUseCase,
    private readonly deleteProgramUseCase: DeleteProgramUseCase,
  ) {}

  async getAll(req: Request, res: Response): Promise<void> {
    const programs = await this.getProgramsUseCase.execute();
  
    successResponse(res, programs);
  }

  async create(req: Request, res: Response): Promise<void> {
    const file = req.file;
  
    const data = {
      title: req.body.title,
      description: req.body.description,
  
      actionText: req.body.actionText,
      actionUrl: req.body.actionUrl,
  
      sortOrder: req.body.sortOrder
        ? Number(req.body.sortOrder)
        : undefined,
  
      isFeatured: req.body.isFeatured === "true",
    };
  
    const program = await this.createProgramUseCase.execute(
      data,
      file,
    );
  
    successResponse(res, program, 201);
  }

  async update(req: Request, res: Response): Promise<void> {
    const id = String(req.params.id);
    const file = req.file;

    const data = {
      title: req.body.title,
      description: req.body.description,
    
      actionText: req.body.actionText,
      actionUrl: req.body.actionUrl,
    
      sortOrder: req.body.sortOrder
        ? Number(req.body.sortOrder)
        : undefined,
    
      isFeatured:
        req.body.isFeatured === undefined
          ? undefined
          : req.body.isFeatured === "true",
    
      isActive:
        req.body.isActive === undefined
          ? undefined
          : req.body.isActive === "true",
    };

    const program = await this.updateProgramUseCase.execute(id, data, file);

    successResponse(res, program);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const id = String(req.params.id);

    await this.deleteProgramUseCase.execute(id);

    successResponse(res, null);
  }
}
