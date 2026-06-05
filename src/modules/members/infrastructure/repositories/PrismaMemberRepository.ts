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
  
      include: {
        interests: true,
      },
  
      orderBy: {
        createdAt: "desc",
      },
    });
  
    return members.map(MemberMapper.toDomain);
  }

  async findById(id: string): Promise<MemberEntity | null> {
    const member = await prisma.member.findFirst({
      where: {
        id,
        deletedAt: null,
      },
  
      include: {
        interests: true,
      },
    });
  
    if (!member) return null;
  
    return MemberMapper.toDomain(member);
  }

  async findByEmail(email: string): Promise<MemberEntity | null> {
    const member = await prisma.member.findFirst({
      where: {
        email,
        deletedAt: null,
      },
  
      include: {
        interests: true,
      },
    });
  
    if (!member) return null;
  
    return MemberMapper.toDomain(member);
  }

  async create(
    data: CreateMemberDto,
  ): Promise<MemberEntity> {
    const member = await prisma.member.create({
      data: {
        fullName: data.fullName,
        role: data.role,
    
        biography: data.biography,
    
        email: data.email,
    
        githubUrl: data.githubUrl,
        linkedinUrl: data.linkedinUrl,
    
        imageUrl: data.imageUrl,
    
        category: data.category,
    
        sortOrder: data.sortOrder ?? 0,
    
        interests: {
          connect: data.interests.map((id) => ({
            id,
          })),
        },
      },
    
      include: {
        interests: true,
      },
    });
  
    return MemberMapper.toDomain(member);
  }

  async update(
    id: string,
    data: UpdateMemberDto,
  ): Promise<MemberEntity> {
  
    const { interests, ...rest } = data;
  
    const member = await prisma.member.update({
      where: { id },
  
      data: {
        ...rest,
  
        ...(interests && {
          interests: {
            set: interests.map((id) => ({
              id,
            })),
          },
        }),
      },
  
      include: {
        interests: true,
      },
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
