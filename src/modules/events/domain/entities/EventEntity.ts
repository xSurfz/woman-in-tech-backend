export interface EventEntity {
  id: string;
  slug: string;
  title: string;

  description: string;

  imageUrl: string | null;

  location: string | null;

  eventMode: "ONSITE" | "ONLINE" | "HYBRID";

  startsAt: Date;
  endsAt: Date | null;

  externalUrl: string | null;

  isFeatured: boolean;

  isActive: boolean;

  deletedAt: Date | null;

  createdAt: Date;
  updatedAt: Date;
}
