import { Request, Response } from "express";

import { GetResourcesUseCase } from "@/modules/resources/application/use-cases/GetResourcesUseCase.js";

import { successResponse } from "@/shared/http/success-response.js";

export class ResourceController {
  constructor(private readonly getResourcesUseCase: GetResourcesUseCase) {}

  async getResources(req: Request, res: Response): Promise<void> {
    const resources = await this.getResourcesUseCase.execute();

    successResponse(res, resources);
  }
}
