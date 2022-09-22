import { prismaClient } from "../database/prismaClient";
import { hash } from "bcryptjs";

interface UserProps {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserProps) {
    if (!email) {
      throw new Error("Incorrect or empty email");
    }
    const passwordHash = await hash(password, 8);

    const userExists = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      throw new Error("User already registered");
    }
    const user = prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
    });
    return user;
  }
}

export { CreateUserService };
