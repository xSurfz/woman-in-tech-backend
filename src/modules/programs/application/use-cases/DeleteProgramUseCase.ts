import { ProgramRepository } from "@/modules/programs/domain/repositories/ProgramRepository.js";
import { ProgramNotFoundException } from "../../domain/exceptions/ProgramNotFoundException.js";

export class DeleteProgramUseCase {
  constructor(private readonly repository: ProgramRepository) {}

  async execute(id: string): Promise<void> {
    const existing = await this.repository.findById(id);

    if (!existing) {
      throw new ProgramNotFoundException();
    }

    await this.repository.softDelete(id);
  }
}
