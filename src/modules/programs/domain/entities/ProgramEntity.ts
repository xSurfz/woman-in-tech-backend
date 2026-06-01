export interface ProgramEntity {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageUrl: string | null;

  actionText: string | null;
  actionUrl: string | null;

  sortOrder: number;

  isFeatured: boolean;
  isActive: boolean;
  deletedAt: Date | null;

  createdAt: Date;
  updatedAt: Date;
}
