import { prismaClient } from "../database/prismaClient";

interface UserProps {
  id: string;
  password?: string;
}

class FindAllUserService {
  async execute({ id, password }: UserProps) {
    const user = prismaClient.user.findMany({
      where: {
        id,
      },
    });
    return user;
  }
}

export { FindAllUserService };
