import { Request, Response } from "express";
import { GetTestimonialsUseCase } from "@/modules/testimonials/application/use-cases/GetTestimonialsUseCase.js";
import { CreateTestimonialUseCase } from "@/modules/testimonials/application/use-cases/CreateTestimonialUseCase.js";
import { UpdateTestimonialUseCase } from "@/modules/testimonials/application/use-cases/UpdateTestimonialUseCase.js";
import { DeleteTestimonialUseCase } from "@/modules/testimonials/application/use-cases/DeleteTestimonialUseCase.js";

import { successResponse } from "@/shared/http/success-response.js";

export class AdminTestimonialController {
  constructor(
    private readonly getTestimonialsUseCase: GetTestimonialsUseCase,
    private readonly createTestimonialUseCase: CreateTestimonialUseCase,
    private readonly updateTestimonialUseCase: UpdateTestimonialUseCase,
    private readonly deleteTestimonialUseCase: DeleteTestimonialUseCase,
  ) {}

  async getAll(req: Request, res: Response): Promise<void> {
    const testimonials =
      await this.getTestimonialsUseCase.execute();
  
    successResponse(res, testimonials);
  }

  async create(req: Request, res: Response): Promise<void> {
    const file = req.file;
  
    const data = {
      fullName: req.body.fullName,
      company: req.body.company,
      role: req.body.role,
      content: req.body.content,
  
      sortOrder: req.body.sortOrder
        ? Number(req.body.sortOrder)
        : undefined,
    };
  
    const testimonial =
      await this.createTestimonialUseCase.execute(
        data,
        file,
      );
  
    successResponse(res, testimonial, 201);
  }

  async update(req: Request, res: Response): Promise<void> {
    const id = String(req.params.id);

    const file = req.file;

    const data = {
      fullName: req.body.fullName,
      company: req.body.company,
      role: req.body.role,
      content: req.body.content,

      sortOrder: req.body.sortOrder
        ? Number(req.body.sortOrder)
        : undefined,

      isActive:
        req.body.isActive === undefined
          ? undefined
          : req.body.isActive === "true",
    };

    const testimonial =
      await this.updateTestimonialUseCase.execute(
        id,
        data,
        file,
      );

    successResponse(res, testimonial);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const id = String(req.params.id);

    await this.deleteTestimonialUseCase.execute(id);

    successResponse(res, null);
  }
}
