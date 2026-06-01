export interface TestimonialEntity {
  id: string;

  fullName: string;

  company: string | null;

  role: string;

  content: string;

  imageUrl: string | null;

  sortOrder: number;

  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;
}
