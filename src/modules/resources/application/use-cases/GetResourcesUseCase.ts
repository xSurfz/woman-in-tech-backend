import { ResourceRepository } from "../../domain/domain/repositories/ResourceRepository.js";

export class GetResourcesUseCase {
  constructor(private readonly resourceRepository: ResourceRepository) {}

  async execute() {
    return this.resourceRepository.findAll();
  }
}
