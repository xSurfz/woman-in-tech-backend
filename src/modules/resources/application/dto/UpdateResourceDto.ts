export interface UpdateResourceDto {
  title?: string;

  description?: string;

  imageUrl?: string;

  url?: string;

  type?: "COURSE" | "SCHOLARSHIP" | "MATERIAL" | "COMMUNITY" | "OTHER";

  isFeatured?: boolean;

  isActive?: boolean;
}
