// import { hash } from "bcryptjs";
import { Request, Response } from "express";
// import { prismaClient } from "../database/prismaClient";
import { UpdateUserService } from "../services/updateUserService";

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const updateUserService = new UpdateUserService();

    const userId = await updateUserService.execute({
      name,
      email,
      password,
      id,
    });

    return res.status(200).json(userId);
  }
}
