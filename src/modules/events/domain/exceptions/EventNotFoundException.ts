import { NotFoundException } from "@/core/exceptions/NotFoundException.js";

export class EventNotFoundException extends NotFoundException {
  constructor() {
    super("Event not found", "EVENT_NOT_FOUND");
  }
}
