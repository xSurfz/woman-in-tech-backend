export abstract class BaseException extends Error {
  public readonly statusCode: number;
  public readonly code: string;
  protected constructor(message: string, statusCode: number, code: string) {
    super(message);

    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.code = code;
    Error.captureStackTrace?.(this, this.constructor);
  }
}
