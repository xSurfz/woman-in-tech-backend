import { ProgramEntity } from "../entities/ProgramEntity.js";
import { CreateProgramDto } from "@/modules/programs/application/dto/CreateProgramDto.js";
import { UpdateProgramDto } from "@/modules/programs/application/dto/UpdateProgramDto.js";

export interface ProgramRepository {
  findAll(): Promise<ProgramEntity[]>;
  findById(id: string): Promise<ProgramEntity | null>;
  findBySlug(slug: string): Promise<ProgramEntity | null>;

  create(data: CreateProgramDto): Promise<ProgramEntity>;

  update(id: string, data: UpdateProgramDto): Promise<ProgramEntity>;

  softDelete(id: string): Promise<void>;
}
