import { prisma } from "@/infrastructure/database/prisma.js";
import { MemberRepository } from "../../domain/repositories/MemberRepository.js";
import { MemberEntity } from "../../domain/entities/MemberEntity.js";
import { MemberMapper } from "./mappers/MemberMapper.js";
import { CreateMemberDto } from "../../application/dto/CreateMemberDto.js";
import { UpdateMemberDto } from "../../application/dto/UpdateMemberDto.js";

export class PrismaMemberRepository implements MemberRepository {
  async findAll(): Promise<MemberEntity[]> {
    const members = await prisma.member.findMany({
      where: {
        deletedAt: null,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return members.map(MemberMapper.toDomain);
  }

  async findById(id: string): Promise<MemberEntity | null> {
    const member = await prisma.member.findFirst({
      where: { id, deletedAt: null },
    });

    if (!member) return null;

    return MemberMapper.toDomain(member);
  }

  async findByEmail(email: string): Promise<MemberEntity | null> {
    const member = await prisma.member.findFirst({
      where: { email, deletedAt: null },
    });

    if (!member) return null;

    return MemberMapper.toDomain(member);
  }

  async create(data: CreateMemberDto): Promise<MemberEntity> {
    const member = await prisma.member.create({
      data,
    });

    return MemberMapper.toDomain(member);
  }

  async update(id: string, data: UpdateMemberDto): Promise<MemberEntity> {
    const member = await prisma.member.update({
      where: { id },
      data,
    });

    return MemberMapper.toDomain(member);
  }

  async softDelete(id: string): Promise<void> {
    await prisma.member.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
