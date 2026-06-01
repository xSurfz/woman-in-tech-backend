import { MemberEntity } from "@/modules/members/domain/entities/MemberEntity.js";
import { MemberCategory, Member } from "@prisma/client";

export class MemberMapper {
  static toDomain(raw: Member): MemberEntity {
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
      raw.interests?.map((i) => i.name) ?? [],
      raw.isActive,
      raw.deletedAt,
    );
  }
}
