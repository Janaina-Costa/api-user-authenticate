import { NextFunction, Request, Response } from "express";

export function testeAdmin(req: Request, res: Response, next: NextFunction) {
  const adm = false;
  if (adm) {
    return next();
  }

  return res.status(401).json({ error: "não autorizado" });
}
