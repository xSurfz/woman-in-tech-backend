import { ResourceNotFoundException } from "../exceptions/ResourceNotFoundException.js";

import { ResourceRepository } from "../../domain/repositories/ResourceRepository.js";

export class DeleteResourceUseCase {
  constructor(private readonly repository: ResourceRepository) {}

  async execute(id: string) {
    const resource = await this.repository.findById(id);

    if (!resource) {
      throw new ResourceNotFoundException();
    }

    await this.repository.softDelete(id);
  }
}
