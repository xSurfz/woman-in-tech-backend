import { NotFoundException } from "@/core/exceptions/NotFoundException.js";

export class EventNotFoundException extends NotFoundException {
  constructor() {
    super();
  }
}
