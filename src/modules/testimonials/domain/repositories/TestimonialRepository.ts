import { TestimonialEntity } from "../entities/TestimonialEntity.js";

import { CreateTestimonialDto } from "../../application/dto/CreateTestimonialDto.js";

import { UpdateTestimonialDto } from "../../application/dto/UpdateTestimonialDto.js";

export interface TestimonialRepository {
  findAll(): Promise<TestimonialEntity[]>;

  findById(id: string): Promise<TestimonialEntity | null>;

  create(data: CreateTestimonialDto): Promise<TestimonialEntity>;

  update(id: string, data: UpdateTestimonialDto): Promise<TestimonialEntity>;

  softDelete(id: string): Promise<void>;
}
