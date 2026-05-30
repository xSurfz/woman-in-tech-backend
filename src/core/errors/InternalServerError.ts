import { AppError } from "@/core/errors/AppError.js";

export class InternalServerError extends AppError {
  constructor(message = "Internal server error") {
    super(message, 500);
  }
}
