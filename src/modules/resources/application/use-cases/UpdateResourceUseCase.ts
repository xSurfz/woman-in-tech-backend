import { UpdateResourceDto } from "../dto/UpdateResourceDto.js";

import { ResourceNotFoundException } from "../exceptions/ResourceNotFoundException.js";
import { ResourceSlugAlreadyExistsException } from "../exceptions/ResourceSlugAlreadyExistsException.js";

import { ResourceRepository } from "../../domain/repositories/ResourceRepository.js";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");
}

export class UpdateResourceUseCase {
  constructor(private readonly repository: ResourceRepository) {}

  async execute(id: string, data: UpdateResourceDto) {
    const resource = await this.repository.findById(id);

    if (!resource) {
      throw new ResourceNotFoundException();
    }

    if (data.title) {
      const slug = slugify(data.title);

      const duplicated = await this.repository.findBySlug(slug);

      if (duplicated && duplicated.id !== id) {
        throw new ResourceSlugAlreadyExistsException();
      }

      data.slug = slug;
    }

    return this.repository.update(id, data);
  }
}
