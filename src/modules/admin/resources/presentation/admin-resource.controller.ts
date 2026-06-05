import { Request, Response } from "express";
import { GetResourcesUseCase } from "@/modules/resources/application/use-cases/GetResourcesUseCase.js";
import { CreateResourceUseCase } from "@/modules/resources/application/use-cases/CreateResourceUseCase.js";
import { UpdateResourceUseCase } from "@/modules/resources/application/use-cases/UpdateResourceUseCase.js";
import { DeleteResourceUseCase } from "@/modules/resources/application/use-cases/DeleteResourceUseCase.js";

import { successResponse } from "@/shared/http/success-response.js";

export class AdminResourceController {
  constructor(
    private readonly getResourcesUseCase: GetResourcesUseCase,
    private readonly createResourceUseCase: CreateResourceUseCase,
    private readonly updateResourceUseCase: UpdateResourceUseCase,
    private readonly deleteResourceUseCase: DeleteResourceUseCase,
  ) {}

  async getAll(
    req: Request,
    res: Response,
  ): Promise<void> {
    const resources =
      await this.getResourcesUseCase.execute();
  
    successResponse(res, resources);
  }

  async create(req: Request, res: Response): Promise<void> {
    const file = req.file;
  
    const data = {
      title: req.body.title,
      description: req.body.description,
  
      url: req.body.url,
      type: req.body.type,
  
      isFeatured: req.body.isFeatured === "true",
    };
  
    const resource =
      await this.createResourceUseCase.execute(
        data,
        file,
      );
  
    successResponse(res, resource, 201);
  }

  async update(req: Request, res: Response): Promise<void> {
    const id = String(req.params.id);

    const file = req.file;

    const data = {
      title: req.body.title,
      description: req.body.description,

      url: req.body.url,
      type: req.body.type,

      isFeatured:
        req.body.isFeatured === undefined
          ? undefined
          : req.body.isFeatured === "true",

      isActive:
        req.body.isActive === undefined
          ? undefined
          : req.body.isActive === "true",
    };

    const resource =
      await this.updateResourceUseCase.execute(
        id,
        data,
        file,
      );

      successResponse(res, resource);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const id = String(req.params.id);

    await this.deleteResourceUseCase.execute(id);

    successResponse(res, null);
  }
}
