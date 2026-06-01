import { prisma } from "@/infrastructure/database/prisma.js";
import { InterestRepository } from "../../domain/repositories/InterestRepository.js";
import { InterestEntity } from "../../domain/entities/InterestEntity.js";
import { InterestMapper } from "./mappers/InterestMapper.js";
import { CreateInterestDto } from "../../application/dto/CreateInterestDto.js";
import { UpdateInterestDto } from "../../application/dto/UpdateInterestDto.js";

export class PrismaInterestRepository implements InterestRepository {
  async findAll(): Promise<InterestEntity[]> {
    const interests = await prisma.interest.findMany({
      where: {
        deletedAt: null,
        isActive: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return interests.map(InterestMapper.toDomain);
  }

  async findById(id: string): Promise<InterestEntity | null> {
    const interest = await prisma.interest.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!interest) return null;

    return InterestMapper.toDomain(interest);
  }

  async create(data: CreateInterestDto): Promise<InterestEntity> {
    const interest = await prisma.interest.create({
      data,
    });

    return InterestMapper.toDomain(interest);
  }

  async update(id: string, data: UpdateInterestDto): Promise<InterestEntity> {
    const interest = await prisma.interest.update({
      where: { id },
      data,
    });

    return InterestMapper.toDomain(interest);
  }

  async softDelete(id: string): Promise<void> {
    await prisma.interest.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        isActive: false,
      },
    });
  }
}
