import { NotFoundException } from "@/core/exceptions/NotFoundException.js";

export class InterestNotFoundException extends NotFoundException {
  constructor() {
    super("Interest not found", "INTEREST_NOT_FOUND");
  }
}
