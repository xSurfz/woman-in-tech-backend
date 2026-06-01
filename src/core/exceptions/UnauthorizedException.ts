import { BaseException } from "@/core/exceptions/BaseExcepcion.js";
import { errorCodes } from "@/shared/constants/errorCodes.js";
import { MESSAGES } from "@/shared/constants/errorMessages.js";
export class UnauthorizedException extends BaseException {
  constructor(message: string = MESSAGES.UNAUTHORIZED, code: string = errorCodes.UNAUTHORIRZED_EXCEPTION
    
  ) {
    super(message, 401, code);
  }
}
