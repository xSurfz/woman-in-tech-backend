import { CreateMemberDto } from "../dto/CreateMemberDto.js";
import { MemberRepository } from "../../domain/repositories/MemberRepository.js";
import { ConflictException } from "@/core/exceptions/ConflictException.js";

export class CreateMemberUseCase {
  constructor(private readonly repository: MemberRepository) {}

  async execute(data: any) {
    const existing = await this.repository.findByEmail(data.email);

    if (existing) {
      throw new ConflictException(
        "Member email already exists",
        "MEMBER_EMAIL_ALREADY_EXISTS",
      );
    }

    return this.repository.create(data);
  }
}
