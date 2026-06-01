import { ResourceEntity } from "../entities/ResourceEntity.js";
import { UpdateResourceDto } from "../../application/dto/UpdateResourceDto.js";
import { CreateResourceDto } from "../../application/dto/CreateResourceDto.js";
export interface ResourceRepository {
  findAll(): Promise<ResourceEntity[]>;

  findById(id: string): Promise<ResourceEntity | null>;

  findBySlug(slug: string): Promise<ResourceEntity | null>;

  create(data: CreateResourceDto): Promise<ResourceEntity>;

  update(id: string, data: UpdateResourceDto): Promise<ResourceEntity>;

  softDelete(id: string): Promise<void>;
}
