import { BaseException } from "@/core/exceptions/BaseExcepcion.js";
import { MESSAGES } from "@/shared/constants/errorMessages.js";
import { errorCodes } from "@/shared/constants/errorCodes.js";
export class ConflictException extends BaseException {
  constructor(
    message: string = MESSAGES.CONFLICT_EXCEPTION,
    code: string = errorCodes.CONFLICT_EXCEPTION,
  ) {
    super(message, 409, code);
  }
}
