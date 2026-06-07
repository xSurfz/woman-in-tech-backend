import { prisma } from "@/infrastructure/database/prisma.js";

import { ResourceRepository } from "../../domain/repositories/ResourceRepository.js";

import { ResourceEntity } from "../../domain/entities/ResourceEntity.js";

import { ResourceMapper } from "./mappers/ResourceMapper.js";

import { CreateResourceDto } from "../../application/dto/CreateResourceDto.js";

import { UpdateResourceDto } from "../../application/dto/UpdateResourceDto.js";
export class PrismaResourceRepository implements ResourceRepository {
  async findAll(): Promise<ResourceEntity[]> {
    const resources = await prisma.resource.findMany({
      where: {
        deletedAt: null,
        isActive: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return resources.map(ResourceMapper.toDomain);
  }

  async findBySlug(slug: string): Promise<ResourceEntity | null> {
    const resource = await prisma.resource.findFirst({
      where: {
        slug,
        deletedAt: null,
      },
    });

    if (!resource) {
      return null;
    }

    return ResourceMapper.toDomain(resource);
  }

  async findById(id: string): Promise<ResourceEntity | null> {
    const resource = await prisma.resource.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!resource) return null;

    return ResourceMapper.toDomain(resource);
  }

  async create(data: CreateResourceDto): Promise<ResourceEntity> {
    const resource = await prisma.resource.create({
      data: {
        ...data,
        slug: data.slug!,
      },
    });
  
    return ResourceMapper.toDomain(resource);
  }

  async update(id: string, data: UpdateResourceDto): Promise<ResourceEntity> {
    const resource = await prisma.resource.update({
      where: { id },
      data,
    });

    return ResourceMapper.toDomain(resource);
  }

  async softDelete(id: string): Promise<void> {
    await prisma.resource.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        isActive: false,
      },
    });
  }
}
