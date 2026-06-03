import { InterestRepository } from "../../domain/repositories/InterestRepository.js";

export class CreateInterestUseCase {
  constructor(private readonly repository: InterestRepository) {}

  async execute(data: any) {
    return this.repository.create(data);
  }
}
