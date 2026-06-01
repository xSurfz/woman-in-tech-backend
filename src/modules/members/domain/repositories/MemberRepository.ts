import { MemberEntity } from "../entities/MemberEntity.js";
import { CreateMemberDto } from "@/modules/members/application/dto/CreateMemberDto.js";
import { UpdateMemberDto } from "@/modules/members/application/dto/UpdateMemberDto.js";

export interface MemberRepository {
  findAll(): Promise<MemberEntity[]>;
  findById(id: string): Promise<MemberEntity | null>;
  findByEmail(email: string): Promise<MemberEntity | null>;

  create(data: CreateMemberDto): Promise<MemberEntity>;

  update(id: string, data: UpdateMemberDto): Promise<MemberEntity>;

  softDelete(id: string): Promise<void>;
}
