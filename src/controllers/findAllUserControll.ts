import { Request, Response } from "express";
import { FindAllUserService } from "../services/findAllUserService ";

export class FindAllUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const findAllUserService = new FindAllUserService();

    const user = await findAllUserService.execute({ id });

    return res.status(200).json(user);
  }
}
