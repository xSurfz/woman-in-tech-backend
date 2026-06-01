import { BaseException } from "@/core/exceptions/BaseExcepcion.js";
import { MESSAGES } from "@/shared/constants/errorMessages.js";
import { errorCodes } from "@/shared/constants/errorCodes.js";
export interface ValidationDetail {
  field: string;
  message: string;
}

export class ValidationException extends BaseException {
  public readonly details: ValidationDetail[];

  constructor(details: ValidationDetail[]) {
    super(MESSAGES.VALIDATION_EXCEPTION, 400, errorCodes.VALIDATION_EXCEPTION);

    this.details = details;
  }
}
