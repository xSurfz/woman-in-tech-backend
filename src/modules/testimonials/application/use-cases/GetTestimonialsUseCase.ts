import { TestimonialRepository } from "../../domain/repositories/TestimonialRepository.js";

export class GetTestimonialsUseCase {
  constructor(private readonly repository: TestimonialRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}
