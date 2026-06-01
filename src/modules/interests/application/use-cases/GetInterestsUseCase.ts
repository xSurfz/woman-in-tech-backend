import { InterestRepository } from "../../domain/repositories/InterestRepository.js";

export class GetInterestsUseCase {
  constructor(private readonly repository: InterestRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}
