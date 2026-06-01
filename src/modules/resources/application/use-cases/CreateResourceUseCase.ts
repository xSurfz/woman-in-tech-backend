import { ResourceRepository } from "@/modules/resources/domain/repositories/ResourceRepository.js";

import { ResourceSlugAlreadyExistsException } from "../exceptions/ResourceSlugAlreadyExistsException.js";

import { CreateResourceDto } from "../dto/CreateResourceDto.js";
import { unwatchFile } from "node:fs";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");
}

export class CreateResourceUseCase {
  constructor(private readonly repository: ResourceRepository) {}

  async execute(data: CreateResourceDto) {
    const slug = slugify(data.title);
    const existing = await this.repository.findBySlug(slug);

    if (existing) {
      throw new ResourceSlugAlreadyExistsException();
    }
    return this.repository.create({
      title: data.title,
      slug, // 👈 ESTE ES EL FIX CLAVE
      description: data.description,
      imageUrl: data.imageUrl ?? undefined,
      url: data.url,
      type: data.type,
      isFeatured: data.isFeatured ?? false,
      isActive: true, // 👈 recomendado
    });
  }
}
