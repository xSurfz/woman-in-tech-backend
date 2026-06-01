import { MemberCategory } from "@prisma/client";

export class MemberEntity {
  constructor(
    public readonly id: string,
    public fullName: string,
    public role: string,
    public biography: string | null,

    public email: string | null,

    public githubUrl: string | null,
    public linkedinUrl: string | null,

    public imageUrl: string | null,

    public category: MemberCategory,

    public sortOrder: number,

    public interests: string[],

    public isActive: boolean,
    public deletedAt: Date | null,
  ) {}
}
