import { Request, Response } from "express";

import { GetTestimonialsUseCase } from "@/modules/testimonials/application/use-cases/GetTestimonialsUseCase.js";

import { successResponse } from "@/shared/http/success-response.js";

export class TestimonialController {
  constructor(
    private readonly getTestimonialsUseCase: GetTestimonialsUseCase,
  ) {}

  async getTestimonials(req: Request, res: Response): Promise<void> {
    const testimonials = await this.getTestimonialsUseCase.execute();

    successResponse(res, testimonials);
  }
}
