import { AppError } from "@/core/errors/AppError.js";
import { MESSAGES } from "@/shared/constants/errorMessages.js";

export class NotFoundError extends AppError {
  constructor(
    message: string = MESSAGES.RESOURCE_NOT_FOUND,
  ) {
    super(message, 404);
  }
}
