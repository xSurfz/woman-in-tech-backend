import { prisma } from "@/infrastructure/database/prisma.js";
import { EventNotFoundException } from "../../domain/errors/EventNotFoundException.js";

export class DeleteEventUseCase {
  async execute(id: string): Promise<void> {
    const existing = await prisma.event.findUnique({
      where: { id },
    });

    if (!existing || existing.deletedAt) {
      throw new EventNotFoundException();
    }

    await prisma.event.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        isActive: false,
      },
    });
  }
}
