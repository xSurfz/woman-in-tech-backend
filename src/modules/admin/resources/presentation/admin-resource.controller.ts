import { Request, Response } from "express";

import { CreateResourceUseCase } from "@/modules/resources/application/use-cases/CreateResourceUseCase.js";
import { UpdateResourceUseCase } from "@/modules/resources/application/use-cases/UpdateResourceUseCase.js";
import { DeleteResourceUseCase } from "@/modules/resources/application/use-cases/DeleteResourceUseCase.js";

import { successResponse } from "@/shared/http/success-response.js";

export class AdminResourceController {
  constructor(
    private readonly createResourceUseCase: CreateResourceUseCase,
    private readonly updateResourceUseCase: UpdateResourceUseCase,
    private readonly deleteResourceUseCase: DeleteResourceUseCase,
  ) {}

  async create(req: Request, res: Response): Promise<void> {
    const resource = await this.createResourceUseCase.execute(req.body);

    successResponse(res, resource, 201);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    const resource = await this.updateResourceUseCase.execute(id, req.body);

    successResponse(res, resource);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    await this.deleteResourceUseCase.execute(id);

    successResponse(res, null);
  }
}
