import { BaseException } from "@/core/exceptions/BaseExcepcion.js";
import { errorCodes } from "@/shared/constants/errorCodes.js";
import { MESSAGES } from "@/shared/constants/errorMessages.js";
export class NotFoundException extends BaseException {
  constructor(
    message: string = MESSAGES.RESOURCE_NOT_FOUND,
    code: string = errorCodes.NOT_FOUND_EXCEPTION,
  ) {
    super(message, 404, code);
  }
}
