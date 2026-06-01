export interface CreateMemberDto {
  fullName: string;
  role: string;

  biography?: string;

  email?: string;

  githubUrl?: string;
  linkedinUrl?: string;

  imageUrl?: string;

  category: "LEADER" | "MEMBER";

  sortOrder?: number;

  interests: string[];
}
