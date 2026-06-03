import { InterestNotFoundException } from "../../domain/exceptions/InterestNotFoundException.js";
import { InterestRepository } from "../../domain/repositories/InterestRepository.js";

export class UpdateInterestUseCase {
  constructor(private readonly repository: InterestRepository) {}

  async execute(id: string, data: any) {
    const interest = await this.repository.findById(id);

    if (!interest) {
      throw new InterestNotFoundException();
    }

    return this.repository.update(id, data);
  }
}
