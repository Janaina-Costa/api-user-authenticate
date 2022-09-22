import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class DeleteUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const userId = await prismaClient.user.delete({
      where: {
        id,
      },
    });
    return res.status(200).send({
      message: "Usuer deleted successfully",
      userId: userId.id,
    });
  }
}
