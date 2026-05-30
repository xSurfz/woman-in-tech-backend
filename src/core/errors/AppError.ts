export abstract class AppError extends Error {
  public readonly statusCode: number;

  protected constructor(message: string, statusCode: number) {
    super(message);

    this.statusCode = statusCode;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}
