import bcrypt from "bcrypt";
import { prisma } from "@/infrastructure/database/prisma.js";
import { JwtService } from "../../infrastructure/services/JwtService.js";
import { InvalidCredentialsException } from "../../domain/exceptions/InvalidCredentialsException.js";

export class LoginUseCase {
  async execute(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new InvalidCredentialsException();
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);

    if (!isValid) {
      throw new InvalidCredentialsException();
    }

    const token = JwtService.sign({
      id: user.id,
      email: user.email,
    });

    return { token, user };
  }
}
