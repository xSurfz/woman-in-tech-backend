import { ConflictException } from "@/core/exceptions/ConflictException.js";

export class ResourceSlugAlreadyExistsException extends ConflictException {
  constructor() {
    super("Resource slug already exists", "RESOURCE_SLUG_ALREADY_EXISTS");
  }
}
