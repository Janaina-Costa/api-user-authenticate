import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }
  next(err);
  return res.status;
});

const localhost = "http://localhost";
const PORT = 5000;

app.get("/", (req, res) => {
  return res.status(200).json("resultado de get");
});

app.listen(5000, () => console.log(`server running at ${localhost}:${PORT}`));
