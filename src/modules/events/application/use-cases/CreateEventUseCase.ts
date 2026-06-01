import { prisma } from "@/infrastructure/database/prisma.js";
import { CreateEventDto } from "../dto/CreateEventDto.js";
import { EventSlugAlreadyExistsException } from "../../domain/exceptions/EventSlugAlreadyExistsException.js";
import { FileStorageService } from "@/infrastructure/upload/storage/FileStorageService.js";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");
}

export class CreateEventUseCase {
  constructor(private readonly storage: FileStorageService) {}

  async execute(data: CreateEventDto, file?: Express.Multer.File) {
    const slug = slugify(data.title);
    console.log("Pasa slug")
    const existing = await prisma.event.findFirst({
      where: { slug },
    });
    console.log("Pasa existiendo")
    if (existing) {
      throw new EventSlugAlreadyExistsException();
    }

    let imageUrl: string | null = null;

    if (file) {
      imageUrl = await this.storage.upload(file);
    }
    console.log("Pasa if de file")
    return prisma.event.create({
      data: {
        slug,
        title: data.title,
        description: data.description,
        imageUrl,
        location: data.location ?? null,
        eventMode: data.eventMode,
        startsAt: data.startsAt,
        endsAt: data.endsAt ?? null,
        externalUrl: data.externalUrl ?? null,
        isFeatured: data.isFeatured,
      },
    });
  }
}
