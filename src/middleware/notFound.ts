import {Request, Response } from "express";

export const notFoundHandler = (req: Request, res: Response) => {
    console.log(`Not found: ${req.originalUrl}`);
    res.status(404).json({ error: 'Not found' });
};