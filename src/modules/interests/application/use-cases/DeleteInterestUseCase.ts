import { InterestRepository } from "../../domain/repositories/InterestRepository.js";
import { InterestNotFoundException } from "../../domain/exceptions/InterestNotFoundException.js";

export class DeleteInterestUseCase {
  constructor(private readonly repository: InterestRepository) {}

  async execute(id: string) {
    const interest = await this.repository.findById(id);

    if (!interest) {
      throw new InterestNotFoundException();
    }

    await this.repository.softDelete(id);
  }
}
