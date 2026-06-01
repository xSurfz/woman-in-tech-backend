import { UpdateProgramDto } from "../dto/UpdateProgramDto.js";
import { ProgramRepository } from "@/modules/programs/domain/repositories/ProgramRepository.js";
import { ProgramNotFoundException } from "../../domain/exceptions/ProgramNotFoundException.js";
import { ProgramSlugAlreadyExistsException } from "../../domain/exceptions/ProgramSlugAlreadyExistsException.js";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");
}

export class UpdateProgramUseCase {
  constructor(private readonly repository: ProgramRepository) {}

  async execute(id: string, data: UpdateProgramDto) {
    const existing = await this.repository.findById(id);

    if (!existing) {
      throw new ProgramNotFoundException();
    }

    if (data.title) {
      const slug = slugify(data.title);

      const duplicated = await this.repository.findBySlug(slug);

      if (duplicated && duplicated.id !== id) {
        throw new ProgramSlugAlreadyExistsException();
      }

      data.slug = slug;
    }

    return this.repository.update(id, data);
  }
}
