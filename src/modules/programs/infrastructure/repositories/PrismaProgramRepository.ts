import { prisma } from "@/infrastructure/database/prisma.js";

import { ProgramRepository } from "@/modules/programs/domain/repositories/ProgramRepository.js";
import { ProgramEntity } from "@/modules/programs/domain/entities/ProgramEntity.js";

import { ProgramMapper } from "./mappers/ProgramMapper.js";

import { CreateProgramDto } from "../../application/dto/CreateProgramDto.js";
import { UpdateProgramDto } from "../../application/dto/UpdateProgramDto.js";

export class PrismaProgramRepository implements ProgramRepository {
  async findAll(): Promise<ProgramEntity[]> {
    const programs = await prisma.program.findMany({
      where: {
        deletedAt: null,
        isActive: true,
      },
      orderBy: {
        sortOrder: "asc",
      },
    });

    return programs.map(ProgramMapper.toDomain);
  }

  async findById(id: string): Promise<ProgramEntity | null> {
    const program = await prisma.program.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!program) {
      return null;
    }

    return ProgramMapper.toDomain(program);
  }

  async findBySlug(slug: string): Promise<ProgramEntity | null> {
    const program = await prisma.program.findFirst({
      where: {
        slug,
        deletedAt: null,
      },
    });

    if (!program) {
      return null;
    }

    return ProgramMapper.toDomain(program);
  }

  async create(data: CreateProgramDto): Promise<ProgramEntity> {
    const program = await prisma.program.create({
      data,
    });

    return ProgramMapper.toDomain(program);
  }

  async update(id: string, data: UpdateProgramDto): Promise<ProgramEntity> {
    const program = await prisma.program.update({
      where: {
        id,
      },
      data,
    });

    return ProgramMapper.toDomain(program);
  }

  async softDelete(id: string): Promise<void> {
    await prisma.program.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
        isActive: false,
      },
    });
  }
}
