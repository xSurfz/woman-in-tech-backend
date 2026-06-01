export interface ResourceEntity {
  id: string;

  title: string;
  slug: string;

  description: string;

  imageUrl: string | null;

  url: string;

  type: "COURSE" | "SCHOLARSHIP" | "MATERIAL" | "COMMUNITY" | "OTHER";

  isFeatured: boolean;

  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;
}
