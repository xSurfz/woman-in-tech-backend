import { NotFoundException } from "@/core/exceptions/NotFoundException.js";

export class ResourceNotFoundException extends NotFoundException {
  constructor() {
    super("Resource not found", "RESOURCE_NOT_FOUND");
  }
}
