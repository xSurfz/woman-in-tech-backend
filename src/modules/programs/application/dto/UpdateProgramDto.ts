export interface UpdateProgramDto {
  slug?: string;

  title?: string;

  description?: string;

  imageUrl?: string;

  actionText?: string;

  actionUrl?: string;

  sortOrder?: number;

  isFeatured?: boolean;

  isActive?: boolean;
}
