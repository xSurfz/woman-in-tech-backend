import { UnauthorizedException } from "@/core/exceptions/UnauthorizedException.js";

export class InvalidCredentialsException extends UnauthorizedException {
  constructor() {
    super("Invalid credentials", "INVALID_CREDENTIALS");
  }
}
