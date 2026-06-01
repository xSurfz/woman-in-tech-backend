import { ConflictException } from "@/core/exceptions/ConflictException.js";

export class EventSlugAlreadyExistsException extends ConflictException {
  constructor() {
    super(
      "An event with this slug already exists",
      "EVENT_SLUG_ALREADY_EXISTS",
    );
  }
}
