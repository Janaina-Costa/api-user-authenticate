import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../database/prismaClient";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    // verifica se o email existe
    const userExist = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });
    if (!userExist) {
      throw Error("Incorrect email or password");
    }

    const conparePassword = await compare(password, userExist.password);
    if (!conparePassword) {
      throw Error("Incorrect email or password");
    }

    // se a senha estiver correta gerar token
    const token = sign(
      {
        email: userExist.email,
      },
      "6954b339d04b541a033d505ea11c768a",
      {
        subject: userExist.id,
        expiresIn: "1d",
      }
    );
    return token;
  }
}

export { AuthenticateUserService };
