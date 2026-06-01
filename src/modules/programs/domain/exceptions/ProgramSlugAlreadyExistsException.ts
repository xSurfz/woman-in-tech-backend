import { ConflictException } from "@/core/exceptions/ConflictException.js";

export class ProgramSlugAlreadyExistsException extends ConflictException {
  constructor() {
    super("Program slug already exists", "PROGRAM_SLUG_ALREADY_EXISTS");
  }
}
