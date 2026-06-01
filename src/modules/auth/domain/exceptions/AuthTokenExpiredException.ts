import { UnauthorizedException } from "@/core/exceptions/UnauthorizedException.js";

export class AuthTokenExpiredException extends UnauthorizedException {
  constructor() {
    super("Token expired", "TOKEN_EXPIRED");
  }
}
