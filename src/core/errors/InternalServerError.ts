import { AppError } from "@/core/errors/AppError.js";
import { MESSAGES } from "@/shared/constants/errorMessages.js";


export class InternalServerError extends AppError {
  constructor(message = MESSAGES.INTERNAL_SERVER_ERROR) {
    super(message, 500);
  }
}
