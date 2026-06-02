import { ResourceRepository } from "@/modules/resources/domain/repositories/ResourceRepository.js";
import { FileStorageService } from "@/infrastructure/upload/storage/FileStorageService.js";
import { ResourceSlugAlreadyExistsException } from "../exceptions/ResourceSlugAlreadyExistsException.js";

import { CreateResourceDto } from "../dto/CreateResourceDto.js";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");
}

export class CreateResourceUseCase {
  constructor(
    private readonly repository: ResourceRepository,
    private readonly storageProvider: FileStorageService,
  ) {}

  async execute(data: CreateResourceDto, file?: Express.Multer.File) {
    const slug = slugify(data.title);
    const existing = await this.repository.findBySlug(slug);

    let imageUrl: string | undefined;

    if (file) {
      imageUrl =
        await this.storageProvider.upload(file);
    }

    if (existing) {
      throw new ResourceSlugAlreadyExistsException();
    }
    return this.repository.create({
      title: data.title,
      slug,
      description: data.description,
      imageUrl,
      url: data.url,
      type: data.type,
      isFeatured: data.isFeatured ?? false,
      isActive: true,
    });
  }
}
