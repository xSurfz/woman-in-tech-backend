import { MemberRepository } from "../../domain/repositories/MemberRepository.js";
import { NotFoundException } from "@/core/exceptions/NotFoundException.js";

export class UpdateMemberUseCase {
  constructor(private readonly repository: MemberRepository) {}

  async execute(id: string, data: any) {
    const member = await this.repository.findById(id);

    if (!member) {
      throw new NotFoundException("Member not found", "MEMBER_NOT_FOUND");
    }

    return this.repository.update(id, data);
  }
}
