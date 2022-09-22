import { prismaClient } from "../database/prismaClient";
import { hash } from "bcryptjs";

interface IUpdateUserService {
  id: string;
  name: string;
  email: string;
  password: string;
}

class UpdateUserService {
  async execute({ name, email, password, id }: IUpdateUserService) {
    const passwordHash = await hash(password, 8);
    const userId = await prismaClient.user.update({
      where: {
        id,
      },
      data: {
        name,
        password: passwordHash,
        email,
      },
    });

    return userId;
  }
}

export { UpdateUserService };
