import { MemberEntity } from "@/modules/members/domain/entities/MemberEntity.js";
import { MemberCategory, Prisma } from "@prisma/client";

type MemberWithInterests =
  Prisma.MemberGetPayload<{
    include: {
      interests: true;
    };
  }>;
export class MemberMapper {
  static toDomain(raw: MemberWithInterests): MemberEntity {
    return new MemberEntity(
      raw.id,
      raw.fullName,
      raw.role,
      raw.biography,
      raw.email,
      raw.githubUrl,
      raw.linkedinUrl,
      raw.imageUrl,
      raw.category as MemberCategory,
      raw.sortOrder,
      raw.interests.map((i) => ({
        id: i.id,
        name: i.name,
      })),
      raw.isActive,
      raw.deletedAt,
    );
  }
}
