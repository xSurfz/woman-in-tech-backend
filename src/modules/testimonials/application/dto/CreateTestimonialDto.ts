export interface CreateTestimonialDto {
  fullName: string;

  company?: string;

  role: string;

  content: string;

  imageUrl?: string;

  sortOrder?: number;
}
