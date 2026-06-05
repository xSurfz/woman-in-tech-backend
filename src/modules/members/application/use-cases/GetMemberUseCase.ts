import { MemberRepository } from "../../domain/repositories/MemberRepository.js";

export class GetMemberUseCase {
  constructor(private readonly repository: MemberRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}
