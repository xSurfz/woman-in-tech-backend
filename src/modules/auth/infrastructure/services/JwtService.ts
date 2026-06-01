import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export class JwtService {
  static sign(payload: object): string {
    return jwt.sign(payload, JWT_SECRET, {
      expiresIn: "1d",
    });
  }

  static verify(token: string) {
    return jwt.verify(token, JWT_SECRET);
  }
}
