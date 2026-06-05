export interface CreateProgramDto {
  slug?: string;

  title: string;

  description: string;

  imageUrl?: string;

  actionText?: string;

  actionUrl?: string;

  sortOrder?: number;

  isFeatured?: boolean;
}
