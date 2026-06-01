import { prisma } from "@/infrastructure/database/prisma.js";

import { CreateProgramDto } from "../dto/CreateProgramDto.js";

import { ProgramRepository } from "@/modules/programs/domain/repositories/ProgramRepository.js";

import { ProgramSlugAlreadyExistsException } from "@/modules/programs/domain/exceptions/ProgramSlugAlreadyExistsException.js";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");
}

export class CreateProgramUseCase {
  constructor(private readonly repository: ProgramRepository) {}

  async execute(data: CreateProgramDto) {
    const slug = slugify(data.title);

    const existing = await this.repository.findBySlug(slug);

    if (existing) {
      throw new ProgramSlugAlreadyExistsException();
    }

    return this.repository.create({
      ...data,
      slug,
    });
  }
}
