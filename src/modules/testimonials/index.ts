import { TestimonialController } from "./presentation/controllers/TestimonialController.js";

import { PrismaTestimonialRepository } from "./infrastructure/repositories/PrismaTestimonialRepository.js";
import { GetTestimonialsUseCase } from "./application/use-cases/GetTestimonialsUseCase.js";

import { CreateTestimonialUseCase } from "./application/use-cases/CreateTestimonialUseCase.js";
import { UpdateTestimonialUseCase } from "./application/use-cases/UpdateTestimonialUseCase.js";
import { DeleteTestimonialUseCase } from "./application/use-cases/DeleteTestimonialUseCase.js";

const repository = new PrismaTestimonialRepository();

const getTestimonialsUseCase = new GetTestimonialsUseCase(repository);

const createTestimonialUseCase = new CreateTestimonialUseCase(repository);

const updateTestimonialUseCase = new UpdateTestimonialUseCase(repository);

const deleteTestimonialUseCase = new DeleteTestimonialUseCase(repository);

export const testimonialController = new TestimonialController(
  getTestimonialsUseCase,
);

export {
  createTestimonialUseCase,
  updateTestimonialUseCase,
  deleteTestimonialUseCase,
};
