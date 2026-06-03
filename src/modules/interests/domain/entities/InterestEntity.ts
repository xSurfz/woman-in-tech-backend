export interface InterestEntity {
  id: string;

  name: string;

  description: string | null;

  isActive: boolean;

  createdAt: Date;
  updatedAt: Date;
}
