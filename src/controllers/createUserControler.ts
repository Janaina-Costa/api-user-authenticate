import { Request, Response } from "express";
import { CreateUserService } from "../services/createUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, password });
    const response = {
      mesage: "Usuario criado com sucesso",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
    return res.status(200).send(response);
  }
}

export { CreateUserController };
