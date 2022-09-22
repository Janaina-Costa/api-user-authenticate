import { Router } from "express";
import { AuthenticateUserController } from "./controllers/authenticateUserController";
import { CreateUserController } from "./controllers/createUserControler";
import { DeleteUserByIdController } from "./controllers/deleteUserById";
import { FindAllUserController } from "./controllers/findAllUserControll";
import { FindUserByIdController } from "./controllers/findUserByIdController";
import { UpdateUserController } from "./controllers/updateUserController";
// import { testeAdmin } from "./middleware/testeestastico";

const router = Router();

const createUser = new CreateUserController();
const findAllUser = new FindAllUserController();
const findUserById = new FindUserByIdController();
const updateUserById = new UpdateUserController();
const deleteUserById = new DeleteUserByIdController();
const authenticateUserController = new AuthenticateUserController();

// Açoes do usuario
// criar usuario
router.post("/signup", createUser.handle);

// alterar usuario pelo id
router.post("/user/:id", updateUserById.handle);

// autenticar usuario
router.post("/signin", authenticateUserController.handle);

// Ações do desenvolvedor
// buscar usuario
router.get("/users", findAllUser.handle);

// busrcar usuario pelo id
router.get("/user/:id", findUserById.handle);

// deletar usuario pelo id
router.delete("/user/:id", deleteUserById.handle);

export { router };
