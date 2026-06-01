import { NotFoundException } from "@/core/exceptions/NotFoundException.js";

export class ProgramNotFoundException extends NotFoundException {
  constructor() {
    super("Program not found", "PROGRAM_NOT_FOUND");
  }
}
