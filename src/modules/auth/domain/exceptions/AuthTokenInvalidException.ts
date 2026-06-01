import { UnauthorizedException } from "@/core/exceptions/UnauthorizedException.js";

export class AuthTokenInvalidException extends UnauthorizedException {
  constructor() {
    super("Invalid token", "INVALID_TOKEN");
  }
}
