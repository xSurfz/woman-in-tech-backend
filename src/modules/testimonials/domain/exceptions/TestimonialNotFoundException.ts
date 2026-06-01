import { NotFoundException } from "@/core/exceptions/NotFoundException.js";

export class TestimonialNotFoundException extends NotFoundException {
  constructor() {
    super("Testimonial not found", "TESTIMONIAL_NOT_FOUND");
  }
}
