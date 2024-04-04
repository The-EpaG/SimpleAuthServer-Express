import { NextFunction, Request, Response } from "express";
import environment from "../environment";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    const msg = environment.ENVIRONMENT !== "dev" ? { error: "Something went wrong" } : { message: err.message, stack: err.stack };
    res.status(500).send(msg);
};