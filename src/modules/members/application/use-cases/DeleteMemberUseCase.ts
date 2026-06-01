import { MemberRepository } from "../../domain/repositories/MemberRepository.js";
import { NotFoundException } from "@/core/exceptions/NotFoundException.js";

export class DeleteMemberUseCase {
  constructor(private readonly repository: MemberRepository) {}

  async execute(id: string) {
    const member = await this.repository.findById(id);

    if (!member) {
      throw new NotFoundException("Member not found", "MEMBER_NOT_FOUND");
    }

    await this.repository.softDelete(id);
  }
}
