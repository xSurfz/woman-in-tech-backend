import { UpdateProgramDto } from "../dto/UpdateProgramDto.js";
import { ProgramRepository } from "@/modules/programs/domain/repositories/ProgramRepository.js";
import { ProgramNotFoundException } from "../../domain/exceptions/ProgramNotFoundException.js";
import { ProgramSlugAlreadyExistsException } from "../../domain/exceptions/ProgramSlugAlreadyExistsException.js";
import { FileStorageService } from "@/infrastructure/upload/storage/FileStorageService.js";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");
}

export class UpdateProgramUseCase {
  constructor(
    private readonly repository: ProgramRepository,
    private readonly storageProvider: FileStorageService,
  ) {}

  async execute(
    id: string,
    data: UpdateProgramDto,
    file?: Express.Multer.File,
  ) {
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
  
    if (file) {
      data.imageUrl = await this.storageProvider.upload(file);
    }
  
    return this.repository.update(id, data);
  }
}
