import { ProgramRepository } from "@/modules/programs/domain/repositories/ProgramRepository.js";

export class GetProgramsUseCase {
  constructor(private readonly repository: ProgramRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}
