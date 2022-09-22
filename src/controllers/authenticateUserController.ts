import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/authenticateUserService";

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authenticateUserService = new AuthenticateUserService();

    const token = await authenticateUserService.execute({ email, password });
    const response = {
      message: "User authenticated successfully.",
      token,
    };
    return res.send(response);
  }
}

export { AuthenticateUserController };
