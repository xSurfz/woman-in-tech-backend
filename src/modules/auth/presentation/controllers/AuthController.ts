import { Request, Response } from "express";
import { LoginUseCase } from "../../application/use-cases/LoginUseCase.js";

export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;

    const result = await this.loginUseCase.execute(email, password);

    res.cookie("token", result.token, {
      httpOnly: true,
      secure: false, // en prod true
      sameSite: "strict",
    });

    res.json({
      success: true,
      user: result.user,
    });
  }

  async logout(req: Request, res: Response): Promise<void> {
    res.clearCookie("token");

    res.json({
      success: true,
      message: "Logged out",
    });
  }

  async me(req: Request, res: Response): Promise<void> {
    res.json({
      success: true,
      data: req.user,
    });
  }
}
