import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const userId = await prismaClient.user.findUnique({
      where: {
        id,
      },
    });
    return res.status(200).json(userId);
  }
}
