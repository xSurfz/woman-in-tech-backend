export interface CreateEventDto {
  title: string;
  description: string;

  imageUrl?: string;
  location?: string;

  eventMode: "ONSITE" | "ONLINE" | "HYBRID";

  startsAt: Date;
  endsAt?: Date;

  externalUrl?: string;

  isFeatured: boolean;
}
