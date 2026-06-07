export interface CreateResourceDto {
  title: string;
  slug?: string;
  description: string;

  imageUrl?: string;

  url: string;

  type: "COURSE" | "SCHOLARSHIP" | "MATERIAL" | "COMMUNITY" | "OTHER";

  isFeatured?: boolean;

  isActive?: boolean
}
