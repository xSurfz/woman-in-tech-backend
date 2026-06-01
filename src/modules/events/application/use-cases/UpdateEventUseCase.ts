import { prisma } from "@/infrastructure/database/prisma.js";

import { UpdateEventDto } from "../dto/UpdateEventDto.js";

import { EventNotFoundException } from "../../domain/errors/EventNotFoundException.js";

import { EventSlugAlreadyExistsException } from "../../domain/exceptions/EventSlugAlreadyExistsException.js";
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");
}

export class UpdateEventUseCase {
  async execute(id: string, data: UpdateEventDto) {
    const existing = await prisma.event.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new EventNotFoundException();
    }

    const updateData: any = { ...data };

    if (data.title) {
      const slug = slugify(data.title);

      const duplicated = await prisma.event.findFirst({
        where: {
          slug,
          NOT: {
            id,
          },
        },
      });

      if (duplicated) {
        throw new EventSlugAlreadyExistsException();
      }

      updateData.slug = slug;
    }

    const updated = await prisma.event.update({
      where: { id },
      data: updateData,
    });

    return updated;
  }
}
