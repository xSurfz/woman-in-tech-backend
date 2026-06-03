import { InterestEntity } from "../entities/InterestEntity.js";
import { CreateInterestDto } from "@/modules/interests/application/dto/CreateInterestDto.js";
import { UpdateInterestDto } from "@/modules/interests/application/dto/UpdateInterestDto.js";

export interface InterestRepository {
  findAll(): Promise<InterestEntity[]>;
  findById(id: string): Promise<InterestEntity | null>;

  create(data: CreateInterestDto): Promise<InterestEntity>;

  update(id: string, data: UpdateInterestDto): Promise<InterestEntity>;

  softDelete(id: string): Promise<void>;
}
