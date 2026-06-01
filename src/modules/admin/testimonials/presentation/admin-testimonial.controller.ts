import { Request, Response } from "express";

import { CreateTestimonialUseCase } from "@/modules/testimonials/application/use-cases/CreateTestimonialUseCase.js";
import { UpdateTestimonialUseCase } from "@/modules/testimonials/application/use-cases/UpdateTestimonialUseCase.js";
import { DeleteTestimonialUseCase } from "@/modules/testimonials/application/use-cases/DeleteTestimonialUseCase.js";

import { successResponse } from "@/shared/http/success-response.js";

export class AdminTestimonialController {
  constructor(
    private readonly createTestimonialUseCase: CreateTestimonialUseCase,
    private readonly updateTestimonialUseCase: UpdateTestimonialUseCase,
    private readonly deleteTestimonialUseCase: DeleteTestimonialUseCase,
  ) {}

  async create(req: Request, res: Response): Promise<void> {
    const testimonial = await this.createTestimonialUseCase.execute(req.body);

    successResponse(res, testimonial, 201);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    const testimonial = await this.updateTestimonialUseCase.execute(
      id,
      req.body,
    );

    successResponse(res, testimonial);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    await this.deleteTestimonialUseCase.execute(id);

    successResponse(res, null);
  }
}
